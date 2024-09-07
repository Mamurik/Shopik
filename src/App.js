import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Main from "./pages/Main";
import OpenedItem from "./components/OpenedItem/OpenedItem";
import shopItemsList from "./Data/shopItemsList.json";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/main" element={<Main />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/phone/:id"
          element={<OpenedItem items={shopItemsList} />}
        />
        <Route path="/*" element={<Navigate to="/error" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
