import "bulma/css/bulma.min.css";
import "./App.css";
import { useState, useEffect } from "react";
import { db } from "./firebase-config";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { async } from "@firebase/util";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Home.js";
import SecretPage from "./Components/SecretPage";

function App() {
  const currentURL = window.location.href;

  return (
    <div className="App">
      <nav
        class="navbar nav--color"
        role="navigation"
        aria-label="main navigation"
      >
        <div class="navbar-brand">
          <a class="navbar-item" href={`${currentURL}`}>
            Secret Text!
          </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-start"></div>
        </div>
      </nav>

      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route path="/secret" element={<Users />} />
          <Route path="/id/:id" element={<SecretPage />} />
        </Routes>
      </Router>
    </div>
  );
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

export default App;
