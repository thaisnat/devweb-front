import React from 'react';
import Header from "./components/Header";
import Search from "./components/Search";
import Timeline from "./components/Timeline";
import NewPost from "./components/Posts/NewPost";
import ListPost from "./components/Posts/listPost";
import './App.css';

const App = () => (
  <div className="App">
    <Search />
    <Header />
    <Timeline />
    <NewPost />
    <ListPost />
  </div>
);

export default App;