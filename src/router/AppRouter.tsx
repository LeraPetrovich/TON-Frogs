import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AboutUs, Bridge, CaviarCoin } from "../pages";
import { Footer } from "../components";
import styles from "./route.style.module.scss";
import { Header } from "../components";

const AppRouter: React.FunctionComponent = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <div className={styles.container}>
                <AboutUs />
              </div>
              <Footer />
            </>
          }
        />
        <Route
          path="/bridge"
          element={
            <>
              <Header />
              <div className={styles.container}>
                <Bridge />
              </div>
              <Footer />
            </>
          }
        />
        <Route
          path="/сaviar_сoin"
          element={
            <>
              <Header />
                <CaviarCoin />
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
};

export default AppRouter;
