import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "./components/NavBar/NavBar";

function App() {
  return (
    <Router>
      <div>
        <Navigation />
      </div>
    </Router>
  );
}

export default App;
