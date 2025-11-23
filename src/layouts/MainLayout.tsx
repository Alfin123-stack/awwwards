// src/layouts/MainLayout.tsx
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

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
