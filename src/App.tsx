import React from "react";
import "./App.css";
import { Header } from "./Header";

function SearchForm() {
  return (
    <form role="search" name="search form">
      <div>
        <label htmlFor="city">City</label>
        <input type="text" id="city" className="city-input" />
      </div>
      <div>
        <button role="button">Choose next bar for me</button>
      </div>
    </form>
  );
}

type Props = Record<string, unknown>;

const App: React.FC<Props> = () => {
  return (
    <div className="App">
      <Header />
      <SearchForm></SearchForm>
    </div>
  );
};

export default App;
