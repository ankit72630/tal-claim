// src/components/header/Header.jsx
import React from "react";
import { Bell, Menu } from "lucide-react"; // or any icon library

export default function Header({ toggleMenu }) {
  return (
    <header className="flex items-center justify-between bg-indigo-700 text-white px-4 py-3 shadow">
      {/* Hamburger (mobile only) */}
      <button
        className="md:hidden focus:outline-none mr-4"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <Menu size={24} />
      </button>

      {/* Logo / Title */}
      <div className="flex items-center space-x-2">
        <span className="font-bold text-lg">Insurance Claim Processing</span>
      </div>

      {/* Icons */}
      <div className="flex items-center space-x-4">
        <button className="focus:outline-none">
          <Bell size={20} />
        </button>
        <img
          src="/user.png"
          alt="User"
          className="w-8 h-8 rounded-full object-cover"
        />
      </div>
    </header>
);
}
