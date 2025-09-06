// src/components/step5/Step5DecisionOrEmail.jsx
import React from "react";

export default function Step5DecisionOrEmail({
  decisionData = null, // now comes in directly
  decision,
  hasDecisionData = false,
  setDecision,
  assessorAmount,
  setAssessorAmount,
  overrideReason,
  setOverrideReason,
  confirmed,
  onConfirm,
  onViewDraft,
  emailViewed,
  sendEmail,
  onPrev,
}) {
  // only show decision UI once we truly have all docs & AI data
  const hasDecision = hasDecisionData && !!decisionData?.recommendedDecision;
  const { subject = "", body = "" } = decisionData.emailDraft || {};
  const combined = `Subject: ${subject}\n\n${body}`;

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h3 className="text-xl font-semibold mb-4">
        {hasDecision ? "Claim Decision" : "Email Draft"}
      </h3>

      {!hasDecision ? (
        <>
          <textarea
            readOnly
            rows={10}
            value={combined}
            className="w-full p-3 border rounded font-mono text-sm resize-none mb-6"
          />
          <div className="flex justify-between">
            <button onClick={onPrev} className="px-4 py-2 border rounded">
              Back
            </button>
            <button
              onClick={sendEmail}
              className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
            >
              Send Email
            </button>
          </div>
        </>
      ) : (
        <>
          {/* Recommended values */}
          <div className="grid gap-4 sm:grid-cols-2 mb-6">
            <div className="flex flex-col">
              <span className="text-gray-700 text-sm mb-1">
                Recommended Decision
              </span>
              <input
                readOnly
                className="border border-gray-300 rounded px-3 py-2 bg-gray-50 text-sm"
                value={decisionData.recommendedDecision}
              />
            </div>
            <div className="flex flex-col">
              <span className="text-gray-700 text-sm mb-1">
                Recommended Amount
              </span>
              <input
                readOnly
                className="border border-gray-300 rounded px-3 py-2 bg-gray-50 text-sm"
                value={decisionData.recommendedAmount}
              />
            </div>
          </div>

          {/* Override controls */}
          <div className="grid gap-4 sm:grid-cols-2 mb-6">
            <div className="flex flex-col">
              <span className="text-gray-700 text-sm mb-1">Decision</span>
              <select
                value={decision}
                onChange={(e) => setDecision(e.target.value)}
                disabled={confirmed}
                className="border border-gray-300 rounded px-3 py-2 text-sm"
              >
                <option value="" disabled>
                  -- Select Decision --
                </option>
                <option value="yes">Approved</option>
                <option value="no">Rejected</option>
              </select>
            </div>
            <div className="flex flex-col">
              <span className="text-gray-700 text-sm mb-1">
                Override Amount
              </span>
              <input
                type="number"
                value={assessorAmount}
                onChange={(e) => setAssessorAmount(e.target.value)}
                disabled={confirmed || decision === "no"}
                className="border border-gray-300 rounded px-3 py-2 text-sm"
                placeholder="Enter amount"
              />
            </div>
          </div>

          {/* Override reason */}
          <div className="mb-6">
            <span className="text-gray-700 text-sm mb-1 block">Reason</span>
            <textarea
              rows={3}
              value={overrideReason}
              onChange={(e) => setOverrideReason(e.target.value)}
              disabled={confirmed}
              className="w-full p-3 border border-gray-300 rounded text-sm resize-none"
            />
          </div>

          {/* Actions */}
          <div className="flex justify-between">
            <button onClick={onPrev} className="px-4 py-2 border rounded">
              Back
            </button>
            {!confirmed ? (
              <button
                onClick={onConfirm}
                className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
              >
                Confirm Override
              </button>
            ) : !emailViewed ? (
              <button
                onClick={onViewDraft}
                className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
              >
                View Email Draft
              </button>
            ) : (
              <button
                onClick={sendEmail}
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
              >
                Notify Claimant
              </button>
            )}
          </div>
        </>
      )}
    </div>
  );
}
