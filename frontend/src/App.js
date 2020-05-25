import React from 'react';
import './App.css';
import RAppBar from "./components/common/RAppBar/RAppBar.jsx";
import RDrawer from "./components/common/RDrawer/RDrawer.jsx";

function App() {
  return (
      <div className="App">
          <RAppBar></RAppBar>
          <RDrawer></RDrawer>
    </div>
  );
}

export default App;
