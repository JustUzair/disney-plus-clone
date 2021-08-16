import React from "react";
import Home from "./components/Home/Home";
import Detail from "./components/Detail/Detail";
import Header from "./components/Header/Header";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Login from "./components/Login/Login";
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route exact path="/login">
          <Login></Login>
        </Route>
        <Route exact path="/detail">
          <Detail></Detail>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
