// src/components/stepper/Stepper.jsx
import React from "react";

export default function Stepper({
  steps = [
    "Life Insured Details",
    "Policy Information",
    "Claimant Details",
    "Documents",
    "Claim Decision",
  ],
  activeStep = 0,
  hasDecisionData = false,
  onStepClick = () => {},
  ariaLabel = (i, label) => `Step ${i + 1}: ${label}`,
}) {
  const labels = steps.map((lbl, i) =>
    i === steps.length - 1 && !hasDecisionData ? "Email Draft" : lbl
  );

  return (
    <nav aria-label="Progress" className="relative w-full px-4 py-4">
      {/* Horizontal connecting line on desktop */}
      <div className="hidden sm:block absolute inset-x-0 top-[37%] transform -translate-y-1/2 border-t border-gray-300" />

      {/* Steps: scrollable on mobile, evenly spaced on desktop */}
      <ol className="flex flex-nowrap space-x-8 overflow-x-auto sm:justify-between items-center">
        {labels.map((label, idx) => {
          const isCompleted = idx < activeStep;
          const isActive = idx === activeStep;

          const bulletBase =
            "z-10 flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold";
          const bulletCls = isActive
            ? "bg-indigo-600 text-white"
            : isCompleted
            ? "bg-green-500 text-white"
            : "bg-gray-300 text-gray-600";
          const labelCls = isActive
            ? "text-indigo-600"
            : isCompleted
            ? "text-green-600"
            : "text-gray-500";

          const content = isCompleted ? (
            <button
              onClick={() => onStepClick(idx)}
              aria-label={ariaLabel(idx, label)}
              className="flex flex-col items-center p-2 focus:outline-none"
            >
              <div className={`${bulletBase} ${bulletCls}`}>✓</div>
              <span className={`mt-2 text-xs font-medium ${labelCls}`}>{label}</span>
            </button>
          ) : (
            <div
              aria-current={isActive ? "step" : undefined}
              aria-label={ariaLabel(idx, label)}
              className="flex flex-col items-center p-2"
            >
              <div className={`${bulletBase} ${bulletCls}`}>{idx + 1}</div>
              <span className={`mt-2 text-xs font-medium ${labelCls}`}>{label}</span>
            </div>
          );

          return (
            <li key={idx} className="flex-shrink-0 flex flex-col items-center text-center">
              {content}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
