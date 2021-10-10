import React from "react";
import "./app.css";
import { Switch, Route, Redirect } from "react-router-dom";
import Favorites from "./components/favorites/favorites";
import Main from "./content/main";
import NavBar from "./content/navBar";
import UserList from "./components/userList";

const App = () => {
  return (
    <div className="container">
      <NavBar />
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/favorites" component={Favorites} />
        <Route path="/:userId?" component={UserList} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
};

export default App;
