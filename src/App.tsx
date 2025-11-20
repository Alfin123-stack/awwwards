// src/App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";

import Landing from "./pages/Landing";
import Nexus from "./pages/Nexus";
import Vault from "./pages/Vault";
import Prologue from "./pages/Prologue";
import About from "./pages/About";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Layout utama */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Landing />} />
          <Route path="/nexus" element={<Nexus />} />
          <Route path="/vault" element={<Vault />} />
          <Route path="/prologue" element={<Prologue />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
