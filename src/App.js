import React, { useState } from "react";
import "./styles.css";

const animalEmojiDictionary = {
  "🐁": "Mouse",
  "🐀": "Rat",
  "🐹": "Hamster",
  "🦔": "Hedgehog",
  "🐇": "Rabbit",
  "🐿️": "Chipmunk"
};
const emojis = Object.keys(animalEmojiDictionary);
export default function App() {
  const [meaning, setMeaning] = useState("Emoji's We know");

  function emojiInputHandler(event) {
    var userInput = event.target.value;

    var meaning = animalEmojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "failure to recognise this emoji";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(userInput) {
    setMeaning(animalEmojiDictionary[userInput]);
  }

  return (
    <div className="App">
      <h1>Animal Emoji Dictionary</h1>
      <input onChange={emojiInputHandler} placeholder={"Search your emoji"} />
      <h3> {meaning} </h3>
      {emojis.map((emoji) => (
        <span
          onClick={() => emojiClickHandler(emoji)}
          style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
        >
          {emoji}
        </span>
      ))}
    </div>
  );
}
