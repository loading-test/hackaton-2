import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Favorites from "./components/favorites/favorites";
import Main from "./content/main";
import NavBar from "./content/navBar";
import UserPage from "./content/userPage";

const App = () => {
  return (
    <div className="container">
      <NavBar />
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/users" component={UserPage} />
        <Route path="/favorites" component={Favorites} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
};

export default App;
