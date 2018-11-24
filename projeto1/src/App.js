import React from 'react';
import Header from "./components/Header";
import Search from "./components/Search";
import Timeline from "./components/Timeline";

import './App.css';

function App() {
  return (
    <div className="App">
    <Search />
    <Header />
    <Timeline />

    </div>
  );
}
export default App;