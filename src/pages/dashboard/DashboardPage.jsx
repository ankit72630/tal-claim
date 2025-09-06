// src/pages/dashboard/DashboardPage.jsx
import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { mockDashboardData } from "../../mock/dashboardData";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import L from "leaflet";
import iconUrl from "leaflet/dist/images/marker-icon.png";
import iconRetinaUrl from "leaflet/dist/images/marker-icon-2x.png";
import shadowUrl from "leaflet/dist/images/marker-shadow.png";
import ClaimsTrendsChart from "../../components/charts/claim-trend/ClaimsTrendsChart";
import StackedAreaTrendsChart from "../../components/charts/claim-trend/StackedAreaTrendsChart";
import CustomGauge from "../../components/custom-gauge/CustomGauge";
import CustomGaugeRatio from "../../components/custom-gauge/CustomGaugeRatio";
import GeoMap from "../../components/GeoMap/GeoMap";
import SparklineChart from "../../components/SparklineChart/SparklineChart";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

// Fix Leaflet's default icon paths
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
});

const statusBadge = {
  Review: "bg-yellow-100 text-yellow-800",
  Approved: "bg-green-100 text-green-800",
  Completed: "bg-green-100 text-green-800",
  Notified: "bg-blue-100 text-blue-800",
  Pending: "bg-purple-100 text-purple-800",
  Fraud: "bg-red-100 text-red-800",
  Disputed: "bg-red-100 text-red-800",
  Missing: "bg-red-100 text-red-800",
};

const tableColumns = [
  { key: "claimNumber", label: "Claim Number", hideOnMobile: false },
  { key: "policyNumber", label: "Policy Number", hideOnMobile: true },
  { key: "insuredName", label: "Insured Name", hideOnMobile: false },
  { key: "claimantName", label: "Claimant", hideOnMobile: true },
  { key: "receivedDate", label: "Received Date", hideOnMobile: false },
  {
    key: "requirements",
    label: "Requirements",
    isBadge: true,
    hideOnMobile: true,
  },
  { key: "status", label: "Status", isBadge: true, hideOnMobile: false },
];

export default function DashboardPage() {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

  const { data, isLoading, isError, refetch, isFetching } = useQuery({
    queryKey: ["dashboard", startDate, endDate],
    queryFn: () => mockDashboardData,
    staleTime: 60000,
    keepPreviousData: true,
  });

  if (isLoading) return <p className="p-6">Loading dashboard…</p>;
  if (isError)
    return <p className="p-6 text-red-600">Error loading dashboard data.</p>;

  const { summary, trends, gauges, recent } = data;
  const { claimAmountHistory, locations } = summary;

  const summaryMetrics = [
    { key: "totalClaims", label: "Total Claims", value: summary.totalClaims },
    {
      key: "approvedClaims",
      label: "Approved Claims",
      value: summary.approvedClaims,
    },
    {
      key: "rejectedClaims",
      label: "Rejected/On Hold",
      value: summary.rejectedClaims,
      valueClass: "text-red-600",
    },
    {
      key: "inReviewClaims",
      label: "In Review Claims",
      value: summary.inReviewClaims,
    },
    {
      key: "approvalRate",
      label: "Approval Rate",
      value: `${(summary.approvalRate * 100).toFixed(1)}%`,
      notes: "(approved ÷ total)",
    },
    {
      key: "avgProcessingTime",
      label: "Avg. Processing Time",
      value: `${summary.avgProcessingTime.toFixed(1)} days`,
      notes: "On closed claims",
    },
    {
      key: "claimsLast7Days",
      label: "Claims Last 7 Days",
      value: summary.claimsLast7Days,
    },
    {
      key: "totalPaidAmount",
      label: "Total Paid Amount",
      value: summary.totalPaidAmount,
    },
    {
      key: "pendingDocumentation",
      label: "Pending Documentation",
      value: summary.pendingDocumentation,
    },
    {
      key: "topLossTypes",
      label: "Top Loss Types",
      value: summary.topLossTypes,
      notes: "Percent by category",
    },
    {
      key: "claimAmount",
      label: "Claim Amount",
      value: summary.claimAmount,
      notes: "Total sum of all submitted claims",
    },
  ];

  const downloadDashboardPDF = () => {
    const dashboard = document.getElementById("dashboard-root");
    html2canvas(dashboard).then((canvas) => {
      const img = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "landscape",
        unit: "px",
        format: [canvas.width, canvas.height],
      });
      pdf.addImage(img, "PNG", 0, 0, canvas.width, canvas.height);
      pdf.save("dashboard.pdf");
    });
  };



  return (
    <div id="dashboard-root" className="p-4 sm:p-6 lg:p-8 bg-gray-50 space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h1 className="text-2xl font-semibold">Overview Report</h1>
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 w-full sm:w-auto">
          <DatePicker
            selectsRange
            startDate={startDate}
            endDate={endDate}
            onChange={setDateRange}
            isClearable
            placeholderText="Filter date range"
            className="w-full sm:w-auto border rounded px-6 py-2"
          />
          <button
            onClick={refetch}
            disabled={isFetching}
            className="w-full sm:w-auto px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
          >
            {isFetching ? "Refreshing…" : "Refresh"}
          </button>
          <button
            onClick={downloadDashboardPDF}
            className="w-full sm:w-auto px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-800"
          >
            Export PDF
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 ">
        {summaryMetrics.map(({ key, label, value, valueClass, notes }) => (
          <div key={key} className="bg-white p-4 rounded shadow flex flex-col">
            <h3 className="text-sm text-gray-600 flex justify-between">
              <span>{label}</span>
              {notes && (
                <Tippy content={notes} placement="top">
                  <span>ℹ️</span>
                </Tippy>
              )}
            </h3>
            <p
              className={`text-lg font-semibold ${
                valueClass || "text-gray-800"
              }`}
            >
              {value}
            </p>
            {key === "claimAmount" && (
              <div className="mt-2 w-full h-10">
                <SparklineChart data={claimAmountHistory} />
              </div>
            )}
          </div>
        ))}
      </div>
      {/* Gauges */}
       <div className="flex flex-col lg:flex-row lg:space-x-8 space-y-8 lg:space-y-0 w-full">
          <div>
            <CustomGauge percentage={gauges.avgDaysToSettle} />
          </div>
          <div >
            <CustomGaugeRatio percentage={gauges.settlementRatio * 100} />
          </div>
        </div>

      {/* Map */}
      <div className="bg-white rounded shadow overflow-hidden">
        <h2 className="p-4 text-lg font-semibold border-b">
          Claims by Location
        </h2>
        <div className="w-full h-56 sm:h-72 md:h-80 lg:h-[300px]">
          <GeoMap points={locations} />
        </div>
      </div>

      {/* Trends and Gauges */}
      <div className="flex flex-col lg:flex-row lg:space-x-8 space-y-8 lg:space-y-0">
        <div className="flex-1 bg-white p-4 rounded shadow ">
          <h3 className="mb-4 text-lg font-semibold">Claims Trends</h3>
          <StackedAreaTrendsChart
            labels={trends.labels}
            submitted={trends.submitted}
            resolved={trends.approved}
            rejected={trends.rejected}
          />
        </div>
        {/* <div className="flex flex-col gap-8">
          <div>
            <CustomGauge percentage={gauges.avgDaysToSettle} />
          </div>
          <div>
            <CustomGaugeRatio percentage={gauges.settlementRatio * 100} />
          </div>
        </div> */}
      </div>
      

      {/* Recent Claims Table */}
      <div className="bg-white p-4 rounded shadow overflow-x-auto">
        <h3 className="mb-4 text-lg font-semibold">Recent Claims Received</h3>
        <table className="min-w-full table-auto whitespace-nowrap">
          <thead className="bg-gray-100">
            <tr>
              {tableColumns.map((col) => (
                <th
                  key={col.key}
                  className={`px-4 py-2 text-left text-sm font-medium text-gray-600 ${
                    col.hideOnMobile ? "hidden sm:table-cell" : ""
                  }`}
                >
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {recent.map((row) => (
              <tr key={row.claimNumber} className="hover:bg-gray-50">
                {tableColumns.map((col) => (
                  <td
                    key={col.key}
                    className={`px-4 py-2 text-sm text-gray-700 ${
                      col.hideOnMobile ? "hidden sm:table-cell" : ""
                    }`}
                  >
                    {col.isBadge ? (
                      <span
                        className={`inline-block px-2 py-1 rounded text-xs font-semibold ${
                          statusBadge[row[col.key]] ||
                          "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {row[col.key]}
                      </span>
                    ) : (
                      row[col.key]
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
