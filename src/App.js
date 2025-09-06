// src/App.jsx
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Header from "./components/header/Header";
import SideMenu from "./components/sidemenu/SideMenu";
import MainBody from "./components/mainbody/MainBody";
import ClaimDetails from "./pages/claim-details/ClaimDetails";
import 'tippy.js/dist/tippy.css';
import 'leaflet/dist/leaflet.css';
import TopBar from "./components/topbar/TopBar";

export default function App() {
  const [selectedMenu, setSelectedMenu] = useState("Dashboard");
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMobileMenu = () => setMobileOpen((open) => !open);

  return (
    <>
    {/* <TopBar /> */}
    <ToastContainer position="top-right" />
      <Router>
        <div className="flex flex-col min-h-screen bg-gray-50">
          {/* Header */}
          <Header toggleMenu={toggleMobileMenu} />

          {/* Body */}
          <div className="flex flex-1 overflow-hidden">
            {/* Overlay on mobile when menu is open */}
            <div
              className={`fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden ${
                mobileOpen ? "block" : "hidden"
              }`}
              onClick={toggleMobileMenu}
            />

            {/* Sidebar (drawer on mobile) */}
            <aside
              className={`fixed inset-y-0 left-0 w-48 bg-indigo-800 text-white transform z-30 transition-transform duration-200
                ${mobileOpen ? "translate-x-0" : "-translate-x-full"}
                md:translate-x-0 md:static md:inset-auto`}
            >
              <SideMenu
                setSelectedMenu={(menu) => {
                  setSelectedMenu(menu);
                  // Close on mobile after selection
                  setMobileOpen(false);
                }}
              />
            </aside>

            {/* Main content */}
            <main className="flex-1 overflow-auto p-4 md:ml-0">
              <Routes>
                <Route
                  path="/"
                  element={<MainBody selectedMenu={selectedMenu} />}
                />
                <Route
                  path="/claim/:claimNumber"
                  element={<ClaimDetails />}
                />
              </Routes>
            </main>
          </div>
        </div>
      </Router>

      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}
