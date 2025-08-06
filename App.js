function App() {
  return (
    <div>
      <h2>UseCase 1 - Components, Props and States</h2>

      <div className="component-box">
        <HelloWorld />
      </div>

      <div className="component-box">
        <HelloMessage prop1="Hi, Hello" />
      </div>

      <div className="component-box">
        <HelloMessage prop1="Message from Ramanujam" prop2="I got this in my dreams" />
      </div>

      <div className="component-box">
        <Counter />
      </div>

      <div className="component-box">
        <AlertButton />
      </div>
    </div>
  );
}
