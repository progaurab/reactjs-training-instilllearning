import React from 'react';
import './App.css';
import Test from '../Test/Test'

const displayEmojiName = event => alert(event.target.id);
const emojis = [
  {
    emoji: "😀",
    name: "grinning face"
  },
  {
    emoji: "🎉",
    name: "party popper"
  },
  {
    emoji: "💃",
    name: "woman dancing"
  }
];


function App() {
  const greeting = "greeting";
  const displayAction = true;
  const hideIt = true;
  return(
    <div className="App-header">
      <h1 id={greeting}>Instill Learning</h1>
      { hideIt && <p>Hello World!</p> }
      {displayAction &&       <Test />}
      <ul>
        {
          emojis.map(emoji => (
            <li key={emoji.name}>
              <button
                onClick={displayEmojiName}
              >
                <span role="img" aria-label={emoji.name} id={emoji.name}>{emoji.emoji}</span>
              </button>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default App;
