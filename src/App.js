import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Places from "./components/Places";
import Discover from "./components/Discover";
import Footer from "./components/Footer";
import Destination from "./components/Destination";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/places" element={<Places />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/destination" element={<Destination />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
