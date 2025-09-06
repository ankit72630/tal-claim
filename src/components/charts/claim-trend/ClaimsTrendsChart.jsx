import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", Submitted: 450, Resolved: 300, Rejected: 100 },
  { name: "Feb", Submitted: 420, Resolved: 310, Rejected: 120 },
  { name: "Mar", Submitted: 440, Resolved: 330, Rejected: 80 },
  { name: "Apr", Submitted: 480, Resolved: 340, Rejected: 70 },
  { name: "May", Submitted: 470, Resolved: 350, Rejected: 60 },
  { name: "Jun", Submitted: 460, Resolved: 360, Rejected: 50 },
];

const ClaimsTrendsChart = () => {
  return (
    <div className="w-full max-w-5xl mx-auto p-4 sm:p-6 lg:p-8 bg-white shadow-md rounded-2xl">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2 sm:mb-0">
          Claims Trends
        </h2>
        <select className="border border-gray-300 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring focus:border-blue-300">
          <option>2025</option>
        </select>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-4 mb-6">
        <div className="flex items-center gap-2">
          <span className="w-4 h-4 bg-gray-300 rounded-sm" />
          <span className="text-sm text-gray-700">Submitted</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-4 h-4 bg-green-400 rounded-sm" />
          <span className="text-sm text-gray-700">Resolved</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-4 h-4 bg-red-500 rounded-sm" />
          <span className="text-sm text-gray-700">Rejected</span>
        </div>
      </div>

      {/* Chart */}
      <div className="w-full h-[300px] sm:h-[370px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barCategoryGap="20%">
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" />
            <YAxis domain={[0, 500]} />
            <Tooltip />
            <Bar dataKey="Submitted" fill="#CBD5E0" barSize={20} />
            <Bar dataKey="Resolved" fill="#34D399" barSize={20} />
            <Bar dataKey="Rejected" fill="#EF4444" barSize={20} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ClaimsTrendsChart;
