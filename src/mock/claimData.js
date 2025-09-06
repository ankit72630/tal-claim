const claimData = {
  P0000222: {
    basicDetails: {
      claimNumber: "CMK1137B0BFD00A4",
      policyNumber: "P0000222",
      claimRef: "CMK1137B0BFD00A4",
      receivedDate: "2025-05-08", // From claimant signature_date
      reportedVia: "Email",
    },
    lifeInsuredDetails: {
      title: "Mr.",
      firstName: "AKSHITH",
      middleName: "N/A",
      lastName: "P G",
      dob: "1975-03-02",
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
    },
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
    claimant: {
      title: "Mrs.",
      firstName: "Elizabeth",
      middleName: "N/A",
      lastName: "Clarke",
      dob: "",
      relationship: "Spouse",
      email: "Elizabeth@yahoo.com",
      address: "1 Elton Street, Chatswood",
      contactNumber: "8088231087",
      postcode: "2058",
      state: "NSW",
      country: "Australia",
      city: "Adelade",
      signatureDate: "2025-05-08",
      signaturePresent: "Yes",
      witness: {
        name: "NA",
        signatureDate: "NA",
        signaturePresent: "Yes",
      },
    },
    emailDraft: {
      emailPayload: `Subject: Important: Documents Required for Your Insurance Claim

Dear Policy Holder,

We are very sorry for the demise of your loved one, AKSHITH P G. Please accept our condolences. Making an insurance claim can be daunting, that's why our claims team will do everything possible to support you every step of the way.

We acknowledge your email informing us of AKSHITH P G's death. We are in receipt of your filled-in claim form. For your future reference, the claim number is CMK1137B0BFD00A4.

We also require the following document from you:

 death certificate,Claimant Birth Certificate,Insured Birth Certificate,Coroner's Report

Also, please send your bank account number as well.

You will be assigned a dedicated Claims Consultant, who will provide support throughout your claim. We may ask questions to understand the type of claim that you need to make and to ensure that we provide you with the correct information.

Once we receive all the required documents, and if your claim has been approved, we'll arrange your payment by a direct deposit or cheque. We'll call you to confirm that your payment has been processed.

Please feel free to contact us for any assistance:
Phone - 1300 553 764 (Monday to Friday, 8.00am to 6.30pm Sydney time)
Email - btlifeclaims@tal.com.au
Post - Life Insurance Claims, GPO Box 524, Sydney NSW 2001

You may also reach out to your financial adviser.

Warm regards,
Claims Team`,
    },
    documents: [
      {
        filename: "Death-claim-form-life-insurance.pdf",
      },
    ],
  },
  P1100012: {
    basicDetails: {
      claimNumber: "CMK1147B0BFD00A4",
      policyNumber: "P1100012",
      claimRef: "CMK1147B0BFD00A4",
      receivedDate: "2025-05-08", // From claimant signature_date
      reportedVia: "Email",
    },
    lifeInsuredDetails: {
      title: "Mr.",
      firstName: "SAANIDHYA",
      middleName: "N/A",
      lastName: "KUMAR",
      dob: "1987-03-02",
      dod: "2025-03-02", // Converted from "02 / 03 / 2025"
      placeOfDeath: "N/A",
      causeOfDeath: "Heart attack",
      country: "Australia",
      address: "Adelaide Oval",
      city: "Brisbane", // Assumed based on "Chatswood"
      state: "Adelaide",
      postcode: "210123",
      phone: "8088231087", // From claimant contact_number
      emailId: "sumitme@gmail.com",
    },
    policyMaster: {
      annualPremium: "1500",
      billingFrequency: "Monthly",
      monthlyPremium: "100",
      sumInsuredAmount: 100000,
      premiumPaidToDate: "2025-12-05",
      policyExpiryDate: "2025-12-12",
      policyIssueDate: "2020-12-12",
      policyStatus: "Active",
      primaryInsured: "Sumit Kumar",
      productCode: "Life-Z01",
      productName: "Life insurance",
    },
    claimant: {
      title: "Mr.",
      firstName: "SUMIT",
      middleName: "N/A",
      lastName: "Clarke",
      dob: "",
      relationship: "Child",
      email: "ak1603292@gmail.com",
      address: "1 Elton Street, Chatswood",
      contactNumber: "8088231087",
      postcode: "2058",
      state: "NSW",
      country: "Australia",
      city: "Adelade",
      signatureDate: "2025-05-08",
      signaturePresent: "Yes",
      witness: {
        name: "NA",
        signatureDate: "NA",
        signaturePresent: "Yes",
      },
    },
    emailDraft: {
      emailPayload: `Subject: Important:  Your Insurance Claim Approved

Dear SUMIT,

As we conveyed before, we are assessing the claim number CMK1147B0BFD00A4 raised for the death claim caused by the unfortunate demise of SAANIDHYA.Towards assessing the claim, we have considered the claim form and other requirements shared by you.

We share with you our initial assessment of AU$ 150000. If you have any feedback on our assessment, please share with us.


Please feel free to contact us for any assistance:
Phone - 1300 553 764 (Monday to Friday, 8.00am to 6.30pm Sydney time)
Email - btlifeclaims@tal.com.au
Post - Life Insurance Claims, GPO Box 524, Sydney NSW 2001

You may also reach out to your financial adviser.

Warm regards,
Claim Team`,
    },
    documents: [
      {
        filename: "Death-claim-form-life-insurance.pdf",
      },
    ],
    decisionData: {
      recommendedDecision: "Approve",
      recommendedAmount: "AU$ 150000",
      reason:
        "We have gone through all your documents attached and glad to know you that its all verified.",
    },
    ai_decision: {
      claim_applicable: "yes",
      claim_amount: 100000,
      conditions_satisfied: [
        "Policy status is active",
        "Death occurred before the premium payment end date",
        "Insured name and deceased person name match exactly",
        "Claim description matches the product code for death insurance",
        "Claimed amount is less than or equal to the insured amount",
      ],
      conditions_failed: [],
      short_summary:
        "The claim is valid as all conditions are satisfied. The insured person passed away before the policy end date, and the claim details are accurate.",
    },
  },
};

export default claimData;
