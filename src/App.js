import React, { useState } from "react";
import "./styles.css";

var flagsDictionary = {
  "🇨🇭": "Switzerland",
  "🇬🇧": "United Kingdom",
  "🇨🇳": "China",
  "🇨🇦": "Canada",
  "🇧🇷": "Brazil",
  "🇮🇳": "Republic of India"
};

var flagsWeKnow = Object.keys(flagsDictionary);

export default function App() {
  var [meaning, setmeaning] = useState("");

  function flagsInputHandler(event) {
    var userInput = event.target.value;

    var meaning = flagsDictionary[userInput];

    if (meaning === undefined) {
      meaning = "we don't have this in our database";
    }
    setmeaning(meaning);
  }

  function flagsClickHandler(flags) {
    var meaning = flagsDictionary[flags];
    setmeaning(meaning);
  }
  return (
    <div className="App">
      <h1>Fun With Flags</h1>
      <input onChange={flagsClickHandler} />
      <h2>{meaning}</h2>

      <h3>Flags we Know 👇 </h3>

      {flagsWeKnow.map(function (flags) {
        return (
          <span
            onClick={() => flagsClickHandler(flags)}
            style={{
              fontSize: "2rem",
              padding: "0.5rem 1.5rem",
              cursor: "pointer"
            }}
            key={flags}
          >
            {flags}
          </span>
        );
      })}
    </div>
  );
}
