import "./App.css";
import Home from './Home';
import Contact from "./Contact";
import Location from "./Location";
import Manage from "./Manage";
import React from "react";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/' component={Home} />
        <Route path='/contact' component={Contact} />
        <Route path='/location' component={Location} />
        <Route path='/manage' component={Manage} />
      </Switch>
    </div>
  );
}

export default App;
