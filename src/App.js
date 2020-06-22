import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Home from './components/Home.js'
import ProjectDetails from "./components/ProjectDetails"

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Redirect from="/" exact to="/home" />
          <Route path="/home" render={() => <Home />}></Route>
          <Route path="/:id/details" render={(props) => <ProjectDetails id={props.match.params.id} />}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
