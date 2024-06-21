import "./App.css";
import SearchBar from "./SearchBar";
import React from "react";

export default function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <div>
        <SearchBar />
      </div>
    </div>
  );
}
