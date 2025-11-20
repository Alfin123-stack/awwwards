// src/layouts/MainLayout.tsx
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MainLayout() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />

      {/* Halaman berubah di sini */}
      <Outlet />

      <Footer />
    </main>
  );
}
