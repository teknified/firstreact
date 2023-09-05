import React from "react";
import { Routes, Route } from "react-router-dom";
import "./app.css";
import Nav from "./components/header/header";
import Footer from "./components/footer/footer";
import Home from "./pages/Home";
import Profile from "./pages/Profile"
function App() {
  return (
    <>
      <Nav/>
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>
      <Footer/>
    </>
  );
}

export default App;
