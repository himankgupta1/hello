import React from 'react';
import HelloWorld from './HelloWorld';
import HelloMessage from './HelloMessage';
import Counter from './Counter';
import AlertButton from './AlertButton';

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h2>UseCase 1 - Components, Props and States</h2>

      <HelloWorld />

      <HelloMessage prop1="Hi, Hello" />
      <HelloMessage prop1="Message from Ramanujam" prop2="I got this in my dreams" />

      <Counter />

      <AlertButton />
    </div>
  );
}

export default App;
