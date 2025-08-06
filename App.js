import React from "react";
import HelloWorld from "./components/HelloWorld";
import HelloMessage from "./components/HelloMessage";
import Counter from "./components/Counter";
import AlertButton from "./components/AlertButton";
import "./App.css";

function App() {
  return (
    <div className="container">
      <h2>UseCase 1 - Components, Props and States</h2>

      <div className="component-box">
        <label>Hello World Component</label>
        <HelloWorld />
      </div>

      <div className="component-box">
        <label>Single Prop</label>
        <HelloMessage prop1="Message from Euler" />
      </div>

      <div className="component-box">
        <label>Multiple Props</label>
        <HelloMessage prop1="Message from Ramanujam" prop2="I got this in my dreams" />
      </div>

      <div className="component-box">
        <label>State and Virtual DOM</label>
        <Counter />
      </div>

      <div className="component-box">
        <label>Interactive Component - Event Handling</label>
        <AlertButton />
      </div>
    </div>
  );
}

export default App;
