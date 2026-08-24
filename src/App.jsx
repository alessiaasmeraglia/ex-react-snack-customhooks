import useSwitch from "./hooks/useSwitch";

function App() {
  const [isOn, toggle] = useSwitch();

  return (
    <main className="container">
      <h1>Snack 1: useSwitch</h1>

      <p className={isOn ? 'status on' : 'status off'}>
        Il valore è: {isOn ? 'ON' : 'OFF'}
      </p>

      <button onClick={toggle}>
        Cambia stato
      </button>
    </main>
  );
}

export default App
