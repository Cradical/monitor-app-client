import React from "react";

import "./App.css";
import NavBar from "./components/NavBar";
import ResponderList from "./components/ResponderList";
import GoogleMap from "./components/GoogleMap";

function App() {
  return (
    <div className='App'>
      <NavBar />
      <ResponderList />
      <div>
        <GoogleMap />
      </div>
    </div>
  );
}

export default App;
