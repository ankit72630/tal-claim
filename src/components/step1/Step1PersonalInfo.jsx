import React from "react";
export default function Step1PersonalInfo({ data, onNext }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h3 className="text-xl font-semibold mb-4">Life Insured Details</h3>
      <div className="grid gap-4 sm:grid-cols-2">
        {[
          ["Title", data.title],
          ["First Name", data.firstName],
          ["Middle Name", data.middleName],
          ["Last Name", data.lastName],
          ["Date of Death", data.dod],
          ["Place of Death", data.placeOfDeath],
          ["Cause of Death", data.causeOfDeath],
          ["Country", data.country],
          ["Address", data.address],
          ["City", data.city],
          ["State", data.state],
          ["Postcode", data.postcode],
          ["Phonenumber", data.phone],
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
      <div className="flex justify-end mt-6">
        <button
          onClick={onNext}
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
        >
          Next
        </button>
      </div> 
    </div>
  )
}