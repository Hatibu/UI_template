import "./App.css";
import React from "react";
import DarkMode from './components/DarkMode';
import Home from './components/Home';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  
  return (
    <div className="App">
     <Navbar />
    </div>
  );
}

export default App;