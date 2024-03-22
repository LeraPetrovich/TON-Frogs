import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AboutUs } from "../pages";
import { Footer } from "../components";
import styles from "./route.style.module.scss";

const AppRouter: React.FunctionComponent = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className={styles.container}>
                <AboutUs />
              </div>
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
};

export default AppRouter;
