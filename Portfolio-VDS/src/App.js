import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar.js";
import Home from "./components/Home/Home";
import Footer from "./components/footer/Footer.js";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import { Puff } from "react-loader-spinner";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar />

        {loading ? (
          <div className="loader-container">
            <Puff color="#00BFFF" height={100} width={100} />
          </div>
        ) : (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        )}

        <Footer />
      </div>
    </Router>
  );
}

export default App;
