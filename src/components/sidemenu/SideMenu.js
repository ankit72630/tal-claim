// src/components/sidemenu/SideMenu.jsx
import React from "react";
import {
  Grid,
  FileText,
  Shield,
  BarChart2,
  Settings,
} from "lucide-react"; // icons

const items = [
  { label: "Overview", icon: <Grid size={20} />, key: "Dashboard" },
  { label: "Claims", icon: <FileText size={20} />, key: "Claim" },
  { label: "Policies", icon: <Shield size={20} />, key: "Policies" },
  { label: "Report", icon: <BarChart2 size={20} />, key: "Report" },
  { label: "Business Rules", icon: <Settings size={20} />, key: "Rules" },
];

export default function SideMenu({ setSelectedMenu }) {
  return (
    <nav className="h-full overflow-y-auto">
      <ul className="space-y-1 p-4">
        {items.map(({ label, icon, key }) => (
          <li
            key={key}
            onClick={() => setSelectedMenu(key)}
            className="flex items-center gap-3 px-3 py-2 rounded hover:bg-indigo-600 cursor-pointer"
          >
            {icon}
            <span className="text-sm">{label}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
}
