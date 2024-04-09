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
import styles from "./route.module.scss";
import { Layout } from "../layout/Layout";

const AppRouter: React.FunctionComponent = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <div className={styles.container}>
                <AboutUs />
              </div>
            </Layout>
          }
        />
        <Route
          path="/bridge"
          element={
            <Layout>
              <div className={styles.container}>
                <Bridge />
              </div>
            </Layout>
          }
        />
        <Route
          path="/caviar_coin"
          element={
            <Layout>
              <CaviarCoin />
            </Layout>
          }
        />
        <Route
          path="/fond"
          element={
            <Layout>
              <Fond />
            </Layout>
          }
        />
        <Route
          path="/team"
          element={
            <Layout>
              <div className={styles.container}>
                <Team />
              </div>
            </Layout>
          }
        />
        <Route
          path="/roadmap"
          element={
            <Layout>
              <Roadmap />
            </Layout>
          }
        />
        <Route
          path="/partner"
          element={
            <Layout>
              <div className={styles.container}>
                <Partner />
              </div>
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
};

export default AppRouter;
