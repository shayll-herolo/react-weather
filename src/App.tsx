import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header/Header";
import RouterOutlet from "./RouterOutlet";
import { routes } from "./routes";

export default function App() {
  return (
    <Router>
      <div>
        <Header />
        <RouterOutlet routes={routes} />
      </div>
    </Router>
  );
}
