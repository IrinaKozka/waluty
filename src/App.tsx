import React from 'react';
import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
// import HomePage from "./components/HomePage/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import RegisterPage from "./components/RegisterPage/RegisterPage";
import LoginPage from "./components/LoginPage/LoginPage";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./helpers/firebaseConfig";
// import UserPage from "./components/UserPage/UserPage";
// import SearchPage from "./components/SearchPage/SearchPage";
import { authContext } from "./helpers/authContext";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <authContext.Provider value={false}>
          <Navbar />
          <Routes>
            <Route path="/" element={<h1>123</h1>} />
            <Route path="/register" element={<h1>123</h1>} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/user" element={<h1>123</h1>  } />
          </Routes>
          
        </authContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
