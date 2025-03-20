import "./App.css";

import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { HashRouter as Router, Route, Routes } from "react-router";
import LoadingBar from "react-top-loading-bar";
import Footer from "./components/Footer";

function App() {
  const [progress, setProgress] = useState(0)
  const apiKey = "e47fe67cf8ff40f39a0e35f09c5106e1"
    return (
      <>
        <Router>
          <Navbar />
          <LoadingBar color="#f11946" progress={progress} />
          <Routes>
            <Route
              index
              element={
                <News 
                apiKey={apiKey}
                setProgress={setProgress}
                  key="general"
                  category="general"
                />
              }
            />
            <Route
              exact
              path="/entertainment"
              element={
                <News 
                apiKey={apiKey}
                setProgress={setProgress}
                  key="entertainment"
                  category="entertainment"
                />
              }
            />
            <Route
              exact
              path="/sports"
              element={
                <News 
                apiKey={apiKey}
                setProgress={setProgress}
                  key="sports"
                  category="sports"
                />
              }
            />
            <Route
              exact
              path="/business"
              element={
                <News 
                apiKey={apiKey}
                setProgress={setProgress}
                  key="business"
                  category="business"
                />
              }
            />
            <Route
              exact
              path="/health"
              element={
                <News 
                apiKey={apiKey}
                setProgress={setProgress}
                  key="health"
                  category="health"
                />
              }
            />
            <Route
              exact
              path="/science"
              element={
                <News 
                apiKey={apiKey}
                setProgress={setProgress}
                  key="science"
                  category="science"
                />
              }
            />
            <Route
              exact
              path="/technology"
              element={
                <News 
                apiKey={apiKey}
                setProgress={setProgress}
                  key="technology"
                  category="technology"
                />
              }
            />
            <Route
              exact
              path="/india"
              element={
                <News 
                apiKey={apiKey}
                setProgress={setProgress}
                  key="india"
                  category="india"
                />
              }
            />
          </Routes>
          <Footer/>
        </Router>
      </>
    );
  }

export default App