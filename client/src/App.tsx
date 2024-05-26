import "./assets/styles/App.css";

import Footer from "./layouts/Footer";
import Navbar from "./layouts/Navbar";
import { Outlet } from "react-router-dom";
import React from "react";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster />
      <div className="App">
        <Navbar />
        <main className="bg-slate-50 min-h-[calc(100vh)]">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
