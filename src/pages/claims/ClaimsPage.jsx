// src/pages/claims/ClaimsPage.jsx
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { mockClaimsData } from "../../mock/claimsData";
import { ClaimsContext } from "../../context/ClaimsContext";

// Map statuses to Tailwind badge classes
const statusBadge = {
  Review: "bg-yellow-100 text-yellow-800",
  Approved: "bg-green-100 text-green-800",
  Completed: "bg-green-100 text-green-800",
  Notified: "bg-blue-100 text-blue-800",
  Pending: "bg-purple-100 text-purple-800",
  "Fraud Detection": "bg-red-100 text-red-800",
  Disputed: "bg-red-100 text-red-800",
  Missing: "bg-red-100 text-red-800",
};

export default function ClaimsPage() {
  const navigate = useNavigate();

  // Fetch mock claims data via React Query
  /* const { data: claimsData = [], isLoading, isError } = useQuery({
    queryKey: ["claims"],
    queryFn: () => mockClaimsData,
    staleTime: 60000,
  }); */

  // Pull from context
  const { claimsData } = useContext(ClaimsContext);
  const isLoading = false;
  const isError = false;

  const [modal, setModal] = useState({
    open: false,
    policy: null,
    summary: "",
  });
  const [filter, setFilter] = useState({ text: "", status: "All" });

  // Filtered rows
  const filtered = claimsData.filter((c) => {
    const matchText =
      filter.text === "" ||
      Object.values(c).some((v) =>
        String(v).toLowerCase().includes(filter.text.toLowerCase())
      );
    const matchStatus = filter.status === "All" || c.status === filter.status;
    return matchText && matchStatus;
  });

  // Open summary modal
  const viewSummary = async (policy) => {
    setModal({ open: true, policy, summary: "Loading..." });
    // Simulate fetch from API -- currently mock
    const claim = claimsData.find((c) => c.policyNumber === policy);
    const text = claim?.summary || "No summary available.";
    setModal({ open: true, policy, summary: text });
  };
  const closeModal = () => setModal({ open: false, policy: null, summary: "" });

  if (isLoading) return <p className="p-6">Loading claims…</p>;
  if (isError) return <p className="p-6 text-red-600">Error loading claims.</p>;

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Claims</h2>
        <span className="text-gray-500">July 2nd, 2025</span>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <input
          type="text"
          value={filter.text}
          onChange={(e) => setFilter((f) => ({ ...f, text: e.target.value }))}
          placeholder="Search by claim, policy, name..."
          className="flex-1 border border-gray-300 rounded px-3 py-2 text-sm"
        />
        <select
          value={filter.status}
          onChange={(e) => setFilter((f) => ({ ...f, status: e.target.value }))}
          className="w-full sm:w-1/4 border border-gray-300 rounded px-3 py-2 text-sm"
        >
          <option value="All">All</option>
          {Object.keys(statusBadge).map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                Claim #
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-600 hidden sm:table-cell">
                Policy #
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                Insured
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-600 hidden sm:table-cell">
                Claimant
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                Received
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-600 hidden sm:table-cell">
                Requirements
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                Status
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filtered.map((row) => (
              <tr key={row.policyNumber} className="hover:bg-gray-50">
                <td className="px-4 py-2 text-sm text-gray-700">
                  {row.claimNumber}
                </td>
                <td className="px-4 py-2 text-sm text-gray-700 hidden sm:table-cell">
                  {row.policyNumber}
                </td>
                <td className="px-4 py-2 text-sm text-gray-700">
                  {row.insuredName}
                </td>
                <td className="px-4 py-2 text-sm text-gray-700 hidden sm:table-cell">
                  {row.claimantName}
                </td>
                <td className="px-4 py-2 text-sm text-gray-700">
                  {row.receivedDate}
                </td>
                <td className="px-4 py-2 text-sm text-gray-700 hidden sm:table-cell">
                  <span
                    className={`inline-block px-2 py-1 rounded text-xs font-semibold ${
                      statusBadge[row.requirements] ||
                      "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {row.requirements}
                  </span>
                </td>
                <td className="px-4 py-2 text-sm text-gray-700">
                  <span
                    className={`inline-block px-2 py-1 rounded text-xs font-semibold ${
                      statusBadge[row.status] || "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {row.status}
                  </span>
                </td>
                <td className="px-4 py-2 text-sm text-gray-700">
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => navigate(`/claim/${row.policyNumber}`)}
                      className="text-indigo-600 hover:underline"
                    >
                      View
                    </button>
                    <button
                      onClick={() => viewSummary(row.policyNumber)}
                      aria-label={`Summary for ${row.policyNumber}`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-gray-600 hover:text-gray-800"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Summary Modal */}
      {modal.open && (
        <SummaryModal
          policy={modal.policy}
          summary={modal.summary}
          onClose={closeModal}
        />
      )}
    </div>
  );
}

// Internal SummaryModal component
function SummaryModal({ policy, summary, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-lg shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">
            Summary for Policy: {policy}
          </h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-xl leading-none"
          >
            &times;
          </button>
        </div>
        <p className="text-gray-700 whitespace-pre-wrap mb-6">{summary}</p>
        <div className="flex justify-end gap-3">
          <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 text-sm">
            Edit
          </button>
          <button className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 text-sm">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
