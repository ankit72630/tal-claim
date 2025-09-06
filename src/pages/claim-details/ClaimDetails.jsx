// src/pages/claim-details/ClaimDetails.jsx
import React, { useState, useRef, lazy, Suspense, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useQuery } from "@tanstack/react-query";
import Stepper from "../../components/stepper/Stepper";
import Loader from "../../components/loader/Loader";
// Mock data
import { mockClaimDetails } from "../../mock/claimDetailsData";
import { ClaimsContext } from "../../context/ClaimsContext";

// Lazy load steps and modal
const Step1PersonalInfo = lazy(() =>
  import("../../components/step1/Step1PersonalInfo")
);
const Step2PolicyDetails = lazy(() =>
  import("../../components/step2/Step2PolicyDetails")
);
const Step3ClaimantDetails = lazy(() =>
  import("../../components/step3/Step3ClaimantDetails")
);
const Step4Documents = lazy(() =>
  import("../../components/step4/Step4Documents")
);
const Step5DecisionOrEmail = lazy(() =>
  import("../../components/step5/Step5DecisionOrEmail")
);
const EmailDraftModal = lazy(() =>
  import("../../components/emaildraft-modal/EmailDraftModal")
);

export default function ClaimDetails() {
  const { updateClaimStatus } = useContext(ClaimsContext);
  const { claimNumber } = useParams();
  const navigate = useNavigate();
  const wizardTopRef = useRef(null);
  const scrollToTop = () =>
    wizardTopRef.current?.scrollIntoView({ behavior: "smooth" });

  const [step, setStep] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [emailDraftBody, setEmailDraftBody] = useState("");
  const [emailDraftSubject, setEmailDraftSubject] = useState("");


  // Step 5 state variables
  const [decision, setDecision] = useState("");
  const [assessorAmount, setAssessorAmount] = useState("");
  const [overrideReason, setOverrideReason] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [emailDraftViewed, setEmailDraftViewed] = useState(false);

  // Fetch claim details via React Query
  const {
    data: claim,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["claimDetails", claimNumber],
    queryFn: () => {
      const all = mockClaimDetails;
      if (!all[claimNumber]) throw new Error("Not found");
      return all[claimNumber];
    },
    staleTime: 60000,
  });

  if (isLoading)
    return (
      <div className="p-6">
        <Loader />
      </div>
    );
  if (isError) {
    toast.error("Failed to load claim data");
    return <div className="p-6 text-red-600">Error loading claim.</div>;
  }

  const {
    basicDetails,
    lifeInsuredDetails,
    policyMaster,
    claimant,
    documents,
    decisionData,
  } = claim;
  const hasDecisionData = documents.some((d) => d.status !== "Missing");
  const totalSteps = 5;

  // Wizard navigation
  const goToStep = (i) => {
    setStep(i);
    scrollToTop();
  };
  const next = () => goToStep(Math.min(step + 1, totalSteps - 1));
  const prev = () => goToStep(Math.max(step - 1, 0));

  /**
   * Downloads a file from `url` and saves it as `filename`.
   */
  const handleDownload = async (url, filename) => {
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const blob = await res.blob();

      // Create a temporary anchor to trigger download
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = filename;
      document.body.appendChild(link);
      link.click();

      // Clean up
      document.body.removeChild(link);
      URL.revokeObjectURL(link.href);
    } catch (err) {
      console.error("Download error", err);
      toast.error("Failed to download document.");
    }
  };

  // Handlers (stubs using mock data directly)
  const nextDoc = () => {
    toast.info("Missing document requested");
    next();
  };
  const nextDecision = () => {
    next();
  };
  const handleConfirmOverride = () => {
    toast.success("Override confirmed");
    setConfirmed(true);
  };
  const fetchEmailDraft = () => {
    // guard in case there’s never any draft
    const draft = claim.decisionData?.emailDraft || {};
    setEmailDraftSubject(draft.subject || "");
    setEmailDraftBody(draft.body || "");
    setModalOpen(true);
  };
  const sendDecisionEmail = () => {
    toast.success("Email sent");
    // MUTATE the shared store
    updateClaimStatus(
      claim.basicDetails.policyNumber,
      decision === "yes" ? "Approved" : "Rejected"
    );
    navigate(-1);
  };

  // Steps array
  const steps = [
    <Step1PersonalInfo key="s1" data={lifeInsuredDetails} onNext={next} />,
    <Step2PolicyDetails
      key="s2"
      data={policyMaster}
      onNext={next}
      onPrev={prev}
    />,
    <Step3ClaimantDetails
      key="s3"
      data={claimant}
      onNext={next}
      onPrev={prev}
    />,
    <Step4Documents
      key="s4"
      docs={documents}
      onNext={hasDecisionData ? nextDecision : nextDoc}
      onPrev={prev}
      onDownload={handleDownload}
    />,
    <Step5DecisionOrEmail
      key="s5"
      decisionData={claim.decisionData}
      hasDecisionData={hasDecisionData}
      decision={decision}
      setDecision={setDecision}
      assessorAmount={assessorAmount}
      setAssessorAmount={setAssessorAmount}
      overrideReason={overrideReason}
      setOverrideReason={setOverrideReason}
      confirmed={confirmed}
      onConfirm={handleConfirmOverride}
      onViewDraft={fetchEmailDraft}
      emailViewed={emailDraftViewed}
      sendEmail={sendDecisionEmail}
      onPrev={prev}
    />,
  ];

  // Today's date
  const today = new Date().toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Sticky wizard header */}
        <div
          ref={wizardTopRef}
          className="sticky top-4 bg-white rounded shadow z-10"
        >
          <div className="flex justify-between items-center px-6 py-3 border-b">
            <h2 className="text-sm text-gray-600">Claims &gt; Claim Details</h2>
            <span className="text-sm text-gray-500">{today}</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6">
            {[
              ["Policy #", basicDetails.policyNumber],
              ["Claim Ref", basicDetails.claimRef],
              ["Received", basicDetails.receivedDate],
              ["Reported Via", basicDetails.reportedVia],
            ].map(([label, val]) => (
              <div key={label} className="bg-gray-50 p-4 rounded">
                <div className="text-xs text-gray-500 uppercase">{label}</div>
                <div className="mt-1 font-medium text-gray-900">{val}</div>
              </div>
            ))}
          </div>
          {/* Stepper */}
          <div className="px-6 pb-4">
            <Suspense fallback={<Loader />}>
              <Stepper
                activeStep={step}
                hasDecisionData={hasDecisionData}
                onStepClick={(i) => i < step && goToStep(i)}
              />
            </Suspense>
            {/* <div className="mt-2 text-sm text-gray-600">
              Step {step + 1} of {totalSteps}
            </div> */}
          </div>
        </div>

        {/* Current step content */}
        <Suspense fallback={<Loader />}>
          <div className="bg-white p-6 rounded shadow">{steps[step]}</div>
        </Suspense>
      </div>

      {/* Email draft modal */}
      {modalOpen && (
        <Suspense fallback={null}>
          <EmailDraftModal
            subject={emailDraftSubject}
            body={emailDraftBody}
            onClose={() => {
              setModalOpen(false);
              setEmailDraftViewed(true);
            }}
          />
        </Suspense>
      )}
    </div>
  );
}
