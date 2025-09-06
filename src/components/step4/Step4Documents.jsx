// src/components/claim-details/Step4Documents.jsx
import React from "react";

export default function Step4Documents({
  docs = [],
  onNext,
  onPrev,
  loading = false,
  onDownload,
  onView,
}) {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h3 className="text-xl font-semibold mb-4">Required Documents</h3>

      <div className="overflow-x-auto">
        <table className="w-full text-sm table-auto">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 text-left">Document Type</th>
              <th className="p-2 text-left">Date Uploaded</th>
              <th className="p-2 text-left">Status</th>
              <th className="p-2 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {docs.map((doc, idx) => (
              <tr key={idx} className="border-t hover:bg-gray-50">
                <td className="p-2">{doc.name}</td>
                <td className="p-2">{doc.dateUploaded}</td>
                <td className="p-2">
                  <span
                    className={`inline-block px-2 py-1 rounded text-xs font-semibold ${
                      doc.status === "Missing"
                        ? "bg-red-100 text-red-700"
                        : "bg-green-100 text-green-700"
                    }`}
                  >
                    {doc.status}
                  </span>
                </td>
                <td className="p-2">
                  
                  <button
                    onClick={() =>
                      onDownload(doc.url, doc.name + ".pdf")
                    }
                    className="hover:text-indigo-600"
                  >
                    <img src="/download.png" alt="Download" className="w-5 h-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between mt-6">
        <button
          onClick={onPrev}
          className="px-4 py-2 border rounded bg-white hover:bg-gray-50 text-sm"
        >
          Back
        </button>

        <button
          onClick={onNext}
          disabled={loading}
          className={`px-4 py-2 rounded text-white text-sm ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-indigo-600 hover:bg-indigo-700"
          }`}
        >
          {loading ? "Fetching..." : "Next"}
        </button>
      </div>
    </div>
  );
}
