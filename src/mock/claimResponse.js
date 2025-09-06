const claimData = {
  "CMK-1137B0BFD00A4": {
    claimNumber: "CMK1137B0BFD00A4",
    policyNumber: "P0000222",
    claimRef: "CMK1137B0BFD00A4",
    receivedDate: "2025-05-08", // From claimant signature_date
    reportedVia: "Email",
    title: "Mr.",
    firstName: "AKSHITH",
    middleName: "N/A",
    lastName: "P G",
    dob: "N/A",
    dod: "2025-03-02", // Converted from "02 / 03 / 2025"
    placeOfDeath: "N/A",
    causeOfDeath: "Heart attack",
    country: "Australia",
    address: "1 Elton Street, Chatswood",
    city: "Sydney", // Assumed based on "Chatswood"
    state: "NSW",
    postcode: "210123",
    phone: "8088231087", // From claimant contact_number
    emailId: "akshithpgpg@gmail.com",
    emailPayload: `Subject: Important: Documents Required for Your Insurance Claim

Dear Policy Holder,

We are very sorry for the demise of your loved one, AKSHITH P G. Please accept our condolences. Making an insurance claim can be daunting, that's why our claims team will do everything possible to support you every step of the way.

We acknowledge your email informing us of AKSHITH P G's death. We are in receipt of your filled-in claim form. For your future reference, the claim number is CMK1137B0BFD00A4.

We also require the following document from you:

government id Proof, death certificate

Also, please send your bank account number as well.

You will be assigned a dedicated Claims Consultant, who will provide support throughout your claim. We may ask questions to understand the type of claim that you need to make and to ensure that we provide you with the correct information.

Once we receive all the required documents, and if your claim has been approved, we'll arrange your payment by a direct deposit or cheque. We'll call you to confirm that your payment has been processed.

Please feel free to contact us for any assistance:
Phone - 1300 553 764 (Monday to Friday, 8.00am to 6.30pm Sydney time)
Email - btlifeclaims@tal.com.au
Post - Life Insurance Claims, GPO Box 524, Sydney NSW 2001

You may also reach out to your financial adviser.

Warm regards,
TAL Claims Team`,
    policyMaster: {
      annualPremium: "1500",
      billingFrequency: "Monthly",
      monthlyPremium: "100",
      sumInsuredAmount: 100000,
      premiumPaidToDate: "2025-12-05",
      policyExpiryDate: "2025-12-12",
      policyIssueDate: "2020-12-12",
      policyStatus: "Active",
      primaryInsured: "Akshith P G",
      productCode: "Life-Z01",
      productName: "Life insurance",
    },
    estateInfo: {
      claimMadeInCapacity: "Spouse",
      hasWill: "No",
      probateGranted: "No",
      applicationForProbate: "No",
      lettersOfAdministrationApplied: "No",
      lettersOfAdministrationBy: "NA",
      probateGrantedTo: "NA",
      relationshipToInsured: "Spouse",
      spouseAtTimeOfDeath: "Yes",
      executors: "NA",
    },
    claimant: {
      name: "Elizabeth Clarke",
      address: "1 Elton Street, Chatswood",
      contactNumber: "8088231087",
      postcode: "2058",
      state: "NSW",
      signatureDate: "2025-05-08",
      signaturePresent: "Yes",
      witness: {
        name: "NA",
        signatureDate: "NA",
        signaturePresent: "Yes",
      },
    },
  },
};

export default claimData;
