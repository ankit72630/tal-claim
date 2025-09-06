// src/components/charts/claim-trend/StackedAreaTrendsChart.jsx
import React from 'react';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

/**
 * StackedAreaTrendsChart
 * 
 * Props:
 * - labels: array of category labels (e.g. ['Jan', 'Feb', ...])
 * - submitted: array of numbers matching labels length
 * - resolved: array of numbers matching labels length
 * - rejected: array of numbers matching labels length
 */
export default function StackedAreaTrendsChart({ labels = [], submitted = [], resolved = [], rejected = [] }) {
  // Map parallel arrays into an array of objects for Recharts
  const data = labels.map((month, idx) => ({
    month,
    Submitted: submitted[idx] || 0,
    Resolved: resolved[idx] || 0,
    Rejected: rejected[idx] || 0,
  }));

  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart
        data={data}
       margin={{ top: 5, right: 10, left: -10, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" horizontal={false} vertical={false}/>
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend verticalAlign="top" height={36} />

        <defs>
          <linearGradient id="colorSubmit" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#60A5FA" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#60A5FA" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorResolve" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#34D399" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#34D399" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorReject" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#F87171" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#F87171" stopOpacity={0} />
          </linearGradient>
        </defs>

        <Area
          type="monotone"
          dataKey="Submitted"
          stackId="1"
          stroke="#60A5FA"
          fill="url(#colorSubmit)"
        />
        <Area
          type="monotone"
          dataKey="Resolved"
          stackId="1"
          stroke="#34D399"
          fill="url(#colorResolve)"
        />
        <Area
          type="monotone"
          dataKey="Rejected"
          stackId="1"
          stroke="#F87171"
          fill="url(#colorReject)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
