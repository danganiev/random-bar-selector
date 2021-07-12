import React, { useState } from "react";

import "./App.css";
import Header from "./components/Header";
import SearchForm from "./components/SearchForm";
import Bar from "./components/Bar";

const App = (): JSX.Element => {
  const [bar, setBar] = useState(null);
  return (
    <div className="App">
      <Header />
      <SearchForm setBar={setBar}></SearchForm>
      <Bar bar={bar} />
    </div>
  );
};

export default App;
