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
        <GoogleMap
          center={{ lat: 48.1, lng: -122.0 }}
          markers={[{ lat: 48.0, lng: -122.0 }, { lat: 48.1, lng: -122.0 }]}
        />
      </div>
    </div>
  );
}

export default App;
