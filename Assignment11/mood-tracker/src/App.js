import React, { useState } from "react";
import "./App.css";

function App() {

  const [mood, setMood] = useState("");

  const moods = {
    Happy: "😊",
    Sad: "😢",
    Excited: "🤩",
    Angry: "😠",
    Tired: "😴"
  };

  return (
    <div className="container">

      <h1>Mood Tracker</h1>
      <p>Select your current mood</p>

      <div className="buttons">
        {Object.keys(moods).map((m) => (
          <button key={m} onClick={() => setMood(m)}>
            {m}
          </button>
        ))}
      </div>

      {mood && (
        <div className="result">
          <h2>Your mood is:</h2>
          <h3>{moods[mood]} {mood}</h3>
        </div>
      )}

    </div>
  );
}

export default App;