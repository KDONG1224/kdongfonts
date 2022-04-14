import { Fontcontainer } from "container";
import HomePage from "pages/HomePage";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/font" element={<Fontcontainer />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
