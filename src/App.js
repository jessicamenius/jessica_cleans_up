import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';

import Home from "./pages/Home"
import About from "./pages/About"

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exactpath="/">
            <Home/>
          </Route>
          <Route exactpath="/">
            <About />
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
