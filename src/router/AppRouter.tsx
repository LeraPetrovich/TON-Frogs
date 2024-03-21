import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AboutUs } from "../pages";

const AppRouter: React.FunctionComponent = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AboutUs />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
