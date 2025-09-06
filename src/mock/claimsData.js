// src/mock/claimsData.js

export const mockClaimsData = [
  {
    claimNumber:  "CLM-1001",
    policyNumber: "POL-45001",
    insuredName:  "Mary Watson",
    claimantName: "Andrew Watson",
    receivedDate: "08-05-2025",
    requirements: "Missing",       // missing docs
    status:       "Review",
    summary:
      "Claim received for water intrusion at insured property. Awaiting receipt of detailed repair estimate and supporting photographs before proceeding to assessment.",
  },
  {
    claimNumber:  "CLM-1002",
    policyNumber: "POL-45002",
    insuredName:  "James “Jim” Carter",
    claimantName: "Sarah Carter",
    receivedDate: "07-30-2025",
    requirements: "Completed",
    status:       "Approved",
    summary:
      "All documentation verified, including proof of loss, invoices, and photographs. Claim approved for disbursement in the amount of $3,750. Settlement will be issued within 5 business days.",
  },
  {
    claimNumber:  "CLM-1003",
    policyNumber: "POL-45003",
    insuredName:  "Olivia Martinez",
    claimantName: "Olivia Martinez",
    receivedDate: "08-01-2025",
    requirements: "Completed",
    status:       "Rejected",
    summary:
      "Claim reviewed and declined due to exclusion clause: policy does not cover damage caused by pre‑existing structural defects. Notification sent to insured with appeal instructions.",
  },
  {
    claimNumber:  "CLM-1004",
    policyNumber: "POL-45004",
    insuredName:  "William “Bill” Thompson",
    claimantName: "Emily Thompson",
    receivedDate: "07-28-2025",
    requirements: "Missing",
    status:       "Pending",
    summary:
      "Initial review complete; medical reports pending. Policyholder to submit attending physician statement and itemized medical bills within 10 days for further evaluation.",
  },
  {
    claimNumber:  "CLM-1005",
    policyNumber: "POL-45005",
    insuredName:  "Sophia Lee",
    claimantName: "Sophia Lee",
    receivedDate: "08-03-2025",
    requirements: "Completed",
    status:       "Notified",
    summary:
      "Claim approved subject to policy limits. Notification email sent to insured with payment details. Funds will be transferred to the designated account by end of week.",
  },
  {
    claimNumber:  "CLM-1006",
    policyNumber: "POL-45006",
    insuredName:  "Michael Johnson",
    claimantName: "Michael Johnson",
    receivedDate: "07-25-2025",
    requirements: "Completed",
    status:       "Completed",
    summary:
      "All claim requirements satisfied and payment processed. Claim file closed. A follow‑up satisfaction survey email will be sent to the policyholder.",
  },
];
