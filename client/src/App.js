import React from "react";
import { Router } from "@reach/router";
import "./App.css";

import Main from "./views/Main";
import Update from "./views/Update";
import Create from "./views/Create";
import Details from "./views/Details";

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/" />
        <Update path="/:id/edit" />
        <Create path="/create" />
        <Details path="/:id" />
      </Router>
    </div>
  );
}

export default App;
