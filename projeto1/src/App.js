import React from 'react';
import Header from "./components/Header";
import NewPost from "./components/Posts/NewPost";
import ListPost from "./components/Posts/ListPost";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <NewPost />
      <ListPost />

    </div>
  );
}
export default App;