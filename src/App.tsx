import React from "react";
import "./App.css";
import { Header } from "./Header";

function SearchForm() {
  const a = "1";
  return <form role="search"></form>;
}

function App() {
  return (
    <div className="App">
      <Header />
      <SearchForm></SearchForm>
    </div>
  );
}

export default App;
