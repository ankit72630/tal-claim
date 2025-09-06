// src/mock/claimDetailsData.js

/**
 * Mock data for Claim Details by policyNumber
 * Keyed by policyNumber, matching useParams
 */
export const mockClaimDetails = {
  // Claim CLM-1001 on POLICY POL-45001
  "POL-45001": {
    basicDetails: {
      policyNumber: "POL-45001",
      claimRef: "CLM-1001",
      receivedDate: "08-05-2025",
      reportedVia: "Customer Portal",
    },
    lifeInsuredDetails: {
      title: "Mrs.",
      firstName: "Mary",
      middleName: "Ann",
      lastName: "Watson",
      dateOfBirth: "11-02-1975",
      gender: "Female",
      address: "123 Elm Street",
      city: "Springfield",
      state: "IL",
      postcode: "62704",
      country: "USA",
      emailId: "mary.watson@example.com",
      phone: "+1 (217) 555-1234",
    },
    policyMaster: {
      policyType: "Homeowners Insurance",
      coverageAmount: "$350,000",
      policyStatus: "Active",
      inceptionDate: "01-15-2024",
      expirationDate: "01-15-2025",
      deductible: "$1,000",
      premiumAmount: "$1,200/year",
      insurer: "Acme Insurance Co.",
      claimOfficer: "John Smith",
    },
    claimant: {
      name: "Andrew Watson",
      relationship: "Spouse",
      contactNumber: "+1 (217) 555-5678",
      email: "andrew.watson@example.com",
      dateOfBirth: "10-05-1977",
      identificationNumber: "DL-12345678",
      address: "123 Elm Street",
      city: "Springfield",
      state: "IL",
      postcode: "62704",
      country: "USA",
      bankDetails: {
        accountName: "Andrew Watson",
        accountNumber: "0123456789",
        bankName: "First National Bank",
      },
      settlementRequested: "$8,250",
    },
    documents: [
      { id: 1, name: "Water Damage Photos", url: "/docs/water_damage_photos.zip", status: "Missing", dateUploaded: "N/A" },
      { id: 2, name: "Repair Estimate", url: "/docs/repair_estimate.pdf", status: "Missing", dateUploaded: "N/A" },
      { id: 3, name: "Proof of Ownership", url: "/docs/proof_of_ownership.pdf", status: "Available", dateUploaded: "08-06-2025" },
    ],
    decisionData: null,
    emailDraft: {
      subject: "Missing Documents for Claim CLM-1001",
      body:
        "Dear Mary Watson,\n\nWe have received your claim CLM-1001 regarding water intrusion at your property..."
    },
  },

  // Claim CLM-1002 on POLICY POL-45002
  "POL-45002": {
    basicDetails: {
      policyNumber: "POL-45002",
      claimRef: "CLM-1002",
      receivedDate: "07-30-2025",
      reportedVia: "Agent Submission",
    },
    lifeInsuredDetails: {
      title: "Mr.",
      firstName: "James",
      middleName: "A.",
      lastName: "Carter",
      dateOfBirth: "03-10-1980",
      gender: "Male",
      address: "456 Oak Avenue",
      city: "Austin",
      state: "TX",
      postcode: "78702",
      country: "USA",
      emailId: "james.carter@example.com",
      phone: "+1 (512) 555-6789",
    },
    policyMaster: {
      policyType: "Personal Auto",
      coverageAmount: "$50,000",
      policyStatus: "Active",
      inceptionDate: "06-15-2024",
      expirationDate: "06-15-2025",
      deductible: "$500",
      premiumAmount: "$800/year",
      insurer: "Acme Insurance Co.",
      claimOfficer: "Sarah Lee",
    },
    claimant: {
      name: "Sarah Carter",
      relationship: "Self",
      contactNumber: "+1 (512) 555-9876",
      email: "sarah.carter@example.com",
      dateOfBirth: "08-22-1982",
      identificationNumber: "SSN-987-65-4321",
      address: "456 Oak Avenue",
      city: "Austin",
      state: "TX",
      postcode: "78702",
      country: "USA",
      bankDetails: {
        accountName: "Sarah Carter",
        accountNumber: "9876543210",
        bankName: "Lone Star Bank",
      },
      settlementRequested: "$3,750",
    },
    documents: [
      { id: 1, name: "Accident Report", url: "/docs/accident_report.pdf", status: "Available", dateUploaded: "07-31-2025" },
      { id: 2, name: "Vehicle Photos", url: "/docs/vehicle_photos.zip", status: "Available", dateUploaded: "07-31-2025" },
      { id: 3, name: "Repair Invoice", url: "/docs/repair_invoice.pdf", status: "Available", dateUploaded: "08-01-2025" },
    ],
    decisionData: {
      recommendedDecision: "Approved",
      recommendedAmount: "$3,750",
      reason: "All required documents verified...",
      conditionsSatisfied: ["Accident Report", "Vehicle Photos", "Repair Invoice"],
      conditionsFailed: [],
      emailDraft: {
        subject: "Claim CLM-1002 Approved",
        body: "Dear Sarah Carter,\n\nYour auto claim CLM-1002 has been approved..."
      },
    },
  },
};
