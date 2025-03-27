import React, { useState } from "react";
import { AllWords } from "./Word";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [meaning, setMeaning] = useState("");
  
  const lowerCaseInput = input.toLowerCase();

  const findWords = (e) => {
    e.preventDefault();
    
    if (AllWords[lowerCaseInput]) {
      setMeaning(AllWords[lowerCaseInput]);
    } else {
      setMeaning("Word is not available in my dictionary.");
    }
  };

  return (
    <div className="container">
      <h1>Made by Tayyab Hakro</h1>
      <span>This is Custom  made Dictionary so words you can not find most word</span>
      <span >Try these words Car house tree </span>
      <h2>Find Words</h2>
      <input 
        type="text" 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
        placeholder="Enter a word..." 
      />
      <button onClick={findWords}>Find Meaning</button>
      <p><strong>{lowerCaseInput}:</strong> {meaning}</p>
    </div>
  );
}

export default App;
