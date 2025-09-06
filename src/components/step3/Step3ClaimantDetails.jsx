import React from "react";
export default function Step3ClaimantDetails({ data, onNext, onPrev }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h3 className="text-xl font-semibold mb-4">Claimant Details</h3>
      <div className="grid gap-4 sm:grid-cols-2">
        {[
          [
            "Name",
            `${data.firstName} ${data.lastName}`,
          ],
          ["Email", data.email],
          ["Phone", data.contactNumber],
          ["Relationship", data.relationship],
          ["Settlement(%)", 100],
          ["Claimant Minor", "No"],
          ["Country", data.country],
          ["Address", data.address],
          ["City", data.city],
          ["State", data.state],
          ["Postcode", data.postcode],
          ["Signature Date", data.signatureDate],
          ["Signature Present", data.signaturePresent],
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
