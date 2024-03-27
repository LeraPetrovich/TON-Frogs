import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  AboutUs,
  Bridge,
  CaviarCoin,
  Fond,
  Team,
  Roadmap,
  Partner,
} from "../pages";
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
        <Route
          path="/fond"
          element={
            <>
              <Header />
              <Fond />
              <Footer />
            </>
          }
        />
        <Route
          path="/team"
          element={
            <>
              <Header />
              <div className={styles.container}>
                <Team />
              </div>
              <Footer />
            </>
          }
        />
        <Route
          path="/roadmap"
          element={
            <>
              <Header />
              <div className={styles.container}>
                <Roadmap />
              </div>
              <Footer />
            </>
          }
        />
        <Route
          path="/partner"
          element={
            <>
              <Header />
              <div className={styles.container}>
                <Partner />
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
