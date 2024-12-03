import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Map, Product } from "./components/index";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/products"} element={<Product />} />
          <Route path={"/map"} element={<Map />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
