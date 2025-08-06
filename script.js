import React from 'react';
import HelloWorld from './components/HelloWorld';
import HelloMessage from './components/HelloMessage';
import Counter from './components/Counter';
import Alert from './components/Alert';

function App() {
return (
<div style={{ margin: '0 100px' }}>
<h3>UseCase 1 - Components, Props and States</h3>

<HelloWorld />

{/* Single Prop */}
<HelloMessage />

{/* Multiple Props */}
<HelloMessage name="Euler" message="Hi, Hello" />
<HelloMessage name="Ramanujam" message="I got this in my dreams" />

<Counter />
<Alert />
</div>
);
}

export default App;
