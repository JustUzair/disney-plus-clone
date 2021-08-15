import React from "react";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import "./App.css";
// import { Route, Switch } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Home></Home>
    </div>
  );
}

export default App;
