import React from "react";
import "./App.css";

import Button from "./components/Button";
import UserInput from "./components/UserInput";
import PictureWindow from "./components/PictureWindow";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{ marginBottom: 3 }}>Landsat 8 satellite imagery </h1>
        <h5 style={{ marginBottom: 10 }}>
          Enter the coordinates you wish by Lat/Long.
        </h5>
        <UserInput />
        <Button />
        <PictureWindow />
      </header>
    </div>
  );
}

export default App;
