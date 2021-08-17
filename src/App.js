import React from "react";
import Home from "./components/Home/Home";
import Detail from "./components/Detail/Detail";
import Header from "./components/Header/Header";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Login from "./components/Login/Login";
import { useSelector } from "react-redux";
import { selectUserName } from "./features/users/userSlice";
function App() {
  const userName = useSelector(selectUserName);
  return (
    <div className="App">
      <Header></Header>

      <Switch>
        <Route exact path="/login">
          <Login></Login>
        </Route>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route exact path="/detail/:id">
          <Detail></Detail>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
