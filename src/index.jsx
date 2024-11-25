import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "./App.css";
import "./css/ledger-font.css";
import "./css/lekton-font.css";
import "./css/lato-font.css";

import MainPage from "./pages/main.page";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(

  <Router>
    <Routes>
      <Route path="/" element={<MainPage />} key="1" />
      <Route path="/:subject" element={<MainPage />} key="1" />
    </Routes>
  </Router>

)