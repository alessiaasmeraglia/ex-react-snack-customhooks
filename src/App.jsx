import useCustomPointer from "./hooks/useCustomPointer";
import useDate from "./hooks/useDate";
import useSwitch from "./hooks/useSwitch";
import useKeyPress from './hooks/useKeyPress';

function App() {
  const [isOn, toggle] = useSwitch();
  const currentDate = useDate();
  const customPointer = useCustomPointer('🔥');
  const isEnterPressed = useKeyPress('Enter');
  const isEscapePressed = useKeyPress('Escape');

  return (
    <main className="container">
      {customPointer}

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

      <section className="card">
        <h1>Snack 3: useCustomPointer</h1>

        <p>
          Muovi il mouse per vedere il cursore personalizzato.
        </p>
      </section>

      <section className="card">
        <h1>Bonus: useKeyPress</h1>

        <p className={isEnterPressed ? 'key pressed' : 'key'}>
          {isEnterPressed
            ? 'Enter premuto! ✅'
            : 'Tieni premuto Enter'}
        </p>

        <p className={isEscapePressed ? 'key pressed' : 'key'}>
          {isEscapePressed
            ? 'Escape premuto! ✅'
            : 'Escape non premuto'}
        </p>
      </section>
    </main>
  );
}

export default App
