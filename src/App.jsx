import useSwitch from "./hooks/useSwitch";
import useDate from "./hooks/useDate";

function App() {
  const [isOn, toggle] = useSwitch();
  const currentDate = useDate();

  return (
    <main className="container">

      <section className="card">
        <h1>Snack 1: useSwitch</h1>

        <p className={isOn ? 'status on' : 'status off'}>
          Il valore è: {isOn ? 'ON' : 'OFF'}
        </p>

        <button onClick={toggle}>
          Cambia stato
        </button>
      </section>

      <section className="card">
        <h1>Snack 2: useDate</h1>

        <p className="date">
          {currentDate.toLocaleString('it-IT')}
        </p>
      </section>
    </main>
  );
}

export default App
