// src/context/ClaimsContext.jsx
import React, { createContext, useState } from "react";
import { mockClaimsData } from "../mock/claimsData";

export const ClaimsContext = createContext({
  claimsData: [],
  updateClaimStatus: () => {},
});

export function ClaimsProvider({ children }) {
  // Initialize from mock
  const [claimsData, setClaimsData] = useState(mockClaimsData);

  // This will flip the status for a given policyNumber
  const updateClaimStatus = (policyNumber, newStatus) => {
    setClaimsData((prev) =>
      prev.map((c) =>
        c.policyNumber === policyNumber ? { ...c, status: newStatus } : c
      )
    );
  };

  return (
    <ClaimsContext.Provider value={{ claimsData, updateClaimStatus }}>
      {children}
    </ClaimsContext.Provider>
  );
}
