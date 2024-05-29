import Footer from "./layouts/Footer";
import Navbar from "./layouts/Navbar";
import { Outlet } from "react-router-dom";
import React from "react";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <main className="bg-slate-50">
          <Outlet />
        </main>
        <Footer />
      </div>
      <Toaster />
    </>
  );
}

export default App;
