function App() {
  const name = 'Brad';
  const y = 5;
  const x = 5;
  const multiplier = 10;

  return (
    <div className="App">
      <h1>Hello From React</h1>
      <h2>{y + x}</h2>
      <h3>{name}</h3>
      <h4>{x * multiplier}, {y * multiplier}</h4>
      <h5>{name}</h5>
      <h6>{multiplier} multiplier</h6>
    </div>
  );
} 

export default App;
