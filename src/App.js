import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Home from './components/Home.js'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Redirect from="/" exact to="/welcome" />
          <Route to="/home" render={() => <Home />}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
