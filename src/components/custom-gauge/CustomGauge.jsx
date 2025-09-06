// src/components/custom-gauge/CustomGauge.jsx
import React from 'react';

/**
 * CustomGauge
 * 
 * Props:
 * - percentage: number (0–100 scale; for days gauge, map days into 0–100 domain)
 * - title: string for gauge heading (e.g. 'Days to Settle' or 'Settlement Ratio')
 */
export default function CustomGauge({ percentage = 0, title = 'Days to Settle' }) {
  const radius = 80;
  const centerX = 100;
  const centerY = 100;
  const needleLength = 60;

  // Map percentage to angle from -90° to +90°
  const angleDeg = (percentage / 100) * 180 - 90;
  const angleRad = (Math.PI / 180) * angleDeg;

  // Needle endpoint
  const needleX = centerX + needleLength * Math.cos(angleRad);
  const needleY = centerY + needleLength * Math.sin(angleRad);

  // Semantic needle color
  let needleColor = '#10B981'; // green
  if (percentage > 60) needleColor = '#EF4444';  // red
  else if (percentage > 30) needleColor = '#F59E0B'; // amber

  return (
    <div className="w-full max-w-md mx-auto p-4 bg-white rounded-2xl shadow-md flex flex-col items-center">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">{title}</h3>

      <svg viewBox="0 0 200 120" className="w-full max-w-[300px] h-auto">
        <defs>
          <linearGradient id="gaugeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#10B981" />    {/* good */}
            <stop offset="50%" stopColor="#F59E0B" />   {/* caution */}
            <stop offset="100%" stopColor="#EF4444" />  {/* danger */}
          </linearGradient>
        </defs>

        {/* Arc */}
        <path
          d="M20,100 A80,80 0 0,1 180,100"
          fill="none"
          stroke="url(#gaugeGradient)"
          strokeWidth="20"
        />

        {/* Needle */}
        <line
          x1={centerX}
          y1={centerY}
          x2={needleX}
          y2={needleY}
          stroke={needleColor}
          strokeWidth="4"
          strokeLinecap="round"
        />

        {/* Center pivot */}
        <circle cx={centerX} cy={centerY} r="5" fill={needleColor} />
      </svg>

      {/* Value label */}
      <div className="mt-4 text-xl font-medium text-gray-700">
        {percentage}{title === 'Settlement Ratio' ? '%' : ' days'}
      </div>

      {/* Threshold markers */}
      <div className="mt-2 text-sm text-gray-600 flex justify-between w-full px-4">
        {title === 'Days to Settle' ? (
          <> <span>0d</span> <span>3d</span> <span>6d+</span> </>
        ) : (
          <> <span>0%</span> <span>50%</span> <span>100%</span> </>
        )}
      </div>
    </div>
  );
}
