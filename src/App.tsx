import React from 'react';
import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
//import HomePage from "./components/HomePage/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import RegisterPage from "./components/RegisterPage/RegisterPage";
import LoginPage from "./components/LoginPage/LoginPage";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./helpers/firebaseConfig"
//import UserPage from "./components/UserPage/UserPage";
//import SearchPage from "./components/SearchPage/SearchPage";
import { authContext } from "./helpers/authContext";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <authContext.Provider value={loggedIn}>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/user" element={<UserPage loggedIn={loggedIn} />} />
          </Routes>
          <HomePage />
        </authContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
