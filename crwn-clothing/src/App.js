import React from "react";
import HomePage from "./pages/homepage/homepage.component";
import "./App.css";
import { Switch, Route, Router } from "react-router-dom";

const HatsPage = () => (
  <div>
    <h1>کلاه ها </h1>{" "}
  </div>
);

function App() {
  return (
    <div>
      
        <Route exact path="/" component={HomePage} />
        <Route path="/hats" component={HatsPage} />
      
    </div>
  );
}

export default App;
