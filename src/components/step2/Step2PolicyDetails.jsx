import React from "react";
export default function Step2PolicyDetails({ data, onNext, onPrev }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h3 className="text-xl font-semibold mb-4">Policy Information</h3>
      <div className="grid gap-4 sm:grid-cols-2">
        {[
          ["Primary Insured", data.primaryInsured],
          ["Sum Assured", data.sumInsuredAmount],
          ["Product Code", data.productCode],
          ["Status", data.policyStatus],
          ["Billing Frequency", data.billingFrequency],
          ["Mode Premium", data.annualPremium],
          ["Product Name", data.productName],
          ["Issue Date", data.policyIssueDate],
          ["Maturity Date", data.policyExpiryDate],
          ["Paid To Date", data.premiumPaidToDate],
        ].map(([label, value], idx) => (
          <div key={idx} className="flex flex-col">
            <span className="text-gray-700 text-sm mb-1">{label}</span>
            <input
              className="border border-gray-300 rounded px-3 py-2 bg-gray-50 text-sm"
              value={value || "N/A"}
              readOnly
            />
          </div>
        ))}
      </div>
      <div className="flex justify-between mt-6">
        <button onClick={onPrev} className="px-4 py-2 border rounded">
          Back
        </button>
        <button onClick={onNext} className="bg-indigo-600 text-white px-4 py-2 rounded">
          Next
        </button>
      </div>
    </div>
  )
}