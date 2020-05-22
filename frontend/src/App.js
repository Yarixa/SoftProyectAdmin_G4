import React from 'react';
import './App.css';
import RAppBar from "./components/RAppBar/RAppBar.jsx";
import RDrawer from "./components/RDrawer/RDrawer.jsx";

function App() {
  return (
      <div className="App">
          <RAppBar></RAppBar>
          <RDrawer></RDrawer>
    </div>
  );
}

export default App;
