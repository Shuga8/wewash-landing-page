import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Product } from "./components/index";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/product"} element={<Product />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
