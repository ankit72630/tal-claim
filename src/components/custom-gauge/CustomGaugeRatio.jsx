// src/components/custom-gauge/CustomGaugeRatio.jsx
import React, { useEffect, useState } from 'react';

/**
 * CustomGaugeRatio
 * 
 * Props:
 * - percentage: number (0–100)
 * - title: string for heading
 * - animationDuration: number (ms)
 */
export default function CustomGaugeRatio({ percentage = 90, title = 'Claims Settlement Ratio', animationDuration = 800 }) {
  const radius = 80;
  const centerX = 100;
  const centerY = 100;
  const needleLength = 60;

  // Animated value state
  const [animatedValue, setAnimatedValue] = useState(0);

  // Animate on percentage change
  useEffect(() => {
    let start = animatedValue;
    const end = percentage;
    const duration = animationDuration;
    const stepTime = 16;
    const step = (end - start) / (duration / stepTime);

    const animate = () => {
      setAnimatedValue(prev => {
        const next = prev + step;
        if ((step > 0 && next >= end) || (step < 0 && next <= end)) {
          return end;
        }
        requestAnimationFrame(animate);
        return next;
      });
    };

    requestAnimationFrame(animate);
  }, [percentage, animationDuration]);

  // Compute needle angle (-90° to +90°)
  const angleDeg = (animatedValue / 100) * 90 - 90;
  const angleRad = (Math.PI / 180) * angleDeg;
  const needleX = centerX + needleLength * Math.cos(angleRad);
  const needleY = centerY + needleLength * Math.sin(angleRad);

  // Determine semantic needle color
  let needleColor = '#EF4444';  // red for <50
  if (animatedValue >= 80) {
    needleColor = '#10B981';    // green
  } else if (animatedValue >= 50) {
    needleColor = '#F59E0B';    // amber
  }

  return (
    <div className="w-full max-w-md mx-auto p-4 bg-white rounded-2xl shadow-md flex flex-col items-center">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">{title}</h3>

      <svg viewBox="0 0 200 120" className="w-full max-w-[300px] h-auto">
        <defs>
          <linearGradient id="ratioGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#EF4444" />   {/* danger */}
            <stop offset="50%" stopColor="#F59E0B" />  {/* caution */}
            <stop offset="100%" stopColor="#10B981" />{/* success */}
          </linearGradient>
        </defs>

        {/* Arc */}
        <path
          d="M20,100 A80,80 0 0,1 180,100"
          fill="none"
          stroke="url(#ratioGradient)"
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

        {/* Pivot */}
        <circle cx={centerX} cy={centerY} r="5" fill={needleColor} />
      </svg>

      {/* Value */}
      <div className="mt-4 text-xl font-medium text-gray-700">
        {Math.round(animatedValue)}%
      </div>

      {/* Threshold labels */}
      <div className="mt-2 text-sm text-gray-600 flex justify-between w-full px-4">
        <span>0%</span>
        <span>50%</span>
        <span>100%</span>
      </div>
    </div>
  );
}
