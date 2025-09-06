// src/mock/dashboardData.js

export const mockDashboardData = {
  summary: {
    // your existing summary metrics
     claimAmount: "$1,234,567",
    totalClaims: 128,
    approvedClaims: 90,
    rejectedClaims: 25,
    inReviewClaims: 13,
    approvalRate: 0.70,
    avgProcessingTime: 4.2,        // days
    claimsLast7Days: 32,
    totalPaidAmount: "$987,654",
    pendingDocumentation: 8,
    topLossTypes: "Water Loss-45%",
   

    // for sparkline…
    claimAmountHistory: [120000, 150000, 130000, 180000, 170000, 160000, 140000],

    // for GeoMap…
    locations: [
      { lat: 40.758, lng: -73.9855, label: "Times Sq, NY" },
      { lat: 40.7282, lng: -74.0776, label: "Jersey City, NJ" },
      { lat: 42.3601, lng: -71.0589, label: "Boston, MA" },
      { lat: 34.0522, lng: -118.2437, label: "Los Angeles, CA" },
      { lat: 41.8781, lng: -87.6298, label: "Chicago, IL" },
    ],
  },

  trends: {
    labels: [
      "2025-07-20",
      "2025-07-21",
      "2025-07-22",
      "2025-07-23",
      "2025-07-24",
      "2025-07-25",
      "2025-07-26",
    ],
    submitted: [5, 8, 6, 10, 7, 9, 8],
    approved:  [3, 6, 4,  8, 5, 7, 6],
    rejected:  [2, 2, 2,  2, 2, 2, 2],
  },

  gauges: {
    avgDaysToSettle: 4.2,       // days
    settlementRatio: 0.85,      // 65%
  },

  recent: [
    {
      claimNumber: "CLM-1001",
      policyNumber: "POL-2001",
      insuredName: "Alice Johnson",
      claimantName: "Bob Johnson",
      receivedDate: "2025-07-25",
      requirements: "Completed",
      status: "Review",
    },
    {
      claimNumber: "CLM-1002",
      policyNumber: "POL-2003",
      insuredName: "Carlos Martinez",
      claimantName: "Dana Martinez",
      receivedDate: "2025-07-24",
      requirements: "Missing",
      status: "Approved",
    },
    {
      claimNumber: "CLM-1003",
      policyNumber: "POL-2010",
      insuredName: "Emily R.",
      claimantName: "Frank R.",
      receivedDate: "2025-07-23",
      requirements: "Completed",
      status: "Completed",
    },
    {
      claimNumber: "CLM-1004",
      policyNumber: "POL-2005",
      insuredName: "George S.",
      claimantName: "Helen S.",
      receivedDate: "2025-07-22",
      requirements: "Missing",
      status: "Rejected",
    },
    {
      claimNumber: "CLM-1005",
      policyNumber: "POL-2007",
      insuredName: "Ian K.",
      claimantName: "Jenny K.",
      receivedDate: "2025-07-21",
      requirements: "Completed",
      status: "Notified",
    },
  ],
};
