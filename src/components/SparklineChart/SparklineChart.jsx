// src/components/SparklineChart.jsx
import React from 'react';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  Tooltip
} from 'recharts';

export default function SparklineChart({ data = [] }) {
  // map to objects for Recharts
  const chartData = data.map((v, i) => ({ x: i, y: v }));
  return (
    <ResponsiveContainer width="100%" height={50}>
      <LineChart data={chartData}>
        <Line dataKey="y" dot={false} stroke="#4F46E5" strokeWidth={2} />
        <Tooltip
          formatter={(val) => [`$${val.toLocaleString()}`, 'Amount']}
          labelFormatter={(i) => `Day ${i + 1}`}
          wrapperStyle={{ outline: 'none' }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
