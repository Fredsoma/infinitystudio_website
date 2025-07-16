import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Pages from "./components/Pages/Pages";

import "./App.css";
const App = () => {
  return (
    <Router>
      <Pages />
    </Router>
  );
};

export default App;
