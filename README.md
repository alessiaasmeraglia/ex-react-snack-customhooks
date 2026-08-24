# Snack Custom Hooks

> Creare e utilizzare custom hook React per gestire stato, tempo, puntatore del mouse e tastiera.

## Informazioni

| Voce | Dettaglio |
| --- | --- |
| Repository | `ex-react-snack-customhooks` |
| Tecnologie | HTML, CSS, JavaScript, React |
| Obiettivo | Sviluppare custom hook riutilizzabili |

## Snack 1 - `useSwitch()`

Creare un custom hook per alternare un valore booleano tra `true` e `false`.

Il hook deve:

- inizializzare il valore a `false`;
- restituire il valore attuale;
- restituire una funzione `toggle()`;
- cambiare il valore da `true` a `false` e viceversa quando viene chiamata `toggle()`.

### Esempio di utilizzo

```jsx
import useSwitch from "./useSwitch";

function App() {
  const [isOn, toggle] = useSwitch();

  return (
    <div>
      <h1>Il valore è: {isOn ? "ON" : "OFF"}</h1>
      <button onClick={toggle}>Cambia Stato</button>
    </div>
  );
}

export default App;
```

## Snack 2 - `useDate()`

Creare un custom hook che restituisca la data e l’ora correnti e che si aggiorni automaticamente ogni secondo.

Il hook deve:

- restituire un oggetto `Date` oppure un valore equivalente contenente data e ora;
- aggiornare il valore ogni secondo;
- usare `useEffect()` per gestire l’intervallo;
- pulire l’intervallo quando il componente viene smontato.

### Esempio di utilizzo

```jsx
import useDate from "./useDate";

function App() {
  const currentDate = useDate();

  return (
    <div>
      <h1>Data e ora attuali:</h1>
      <p>{currentDate.toLocaleString()}</p>
    </div>
  );
}

export default App;
```

## Snack 3 - `useCustomPointer()`

Creare un custom hook che sostituisca il cursore del mouse con un componente personalizzato.

Il hook deve:

- ricevere una stringa o un componente JSX;
- posizionare il contenuto personalizzato in corrispondenza del puntatore;
- aggiornare la posizione mentre il mouse si muove;
- restituire il componente da renderizzare nell’applicazione.

Il contenuto può essere, ad esempio:

- un’emoji;
- un’icona;
- un’animazione;
- un componente React personalizzato.

### Esempio di utilizzo

```jsx
import useCustomPointer from "./useCustomPointer";

function App() {
  const customPointer = useCustomPointer("🔥");

  return (
    <div>
      <h1>Sposta il mouse per vedere il cursore personalizzato!</h1>
      {customPointer}
    </div>
  );
}

export default App;
```

## Bonus - `useKeyPress()`

Creare un custom hook che rilevi se un tasto specifico della tastiera è premuto.

Il hook deve:

- ricevere il nome di un tasto, come `Enter` o `Escape`;
- restituire `true` quando il tasto è premuto;
- restituire `false` quando il tasto viene rilasciato;
- usare event listener per gli eventi `keydown` e `keyup`;
- rimuovere gli event listener quando il componente viene smontato.

### Esempio di utilizzo

```jsx
import useKeyPress from "./useKeyPress";

function App() {
  const isEnterPressed = useKeyPress("Enter");

  return (
    <div>
      <h1>Tieni premuto "Enter" per testare il custom hook</h1>
      <p>
        {isEnterPressed
          ? "Enter premuto! ✅"
          : "Aspettando input... ⌨️"}
      </p>
    </div>
  );
}

export default App;
```

## Requisiti tecnici

- I custom hook devono iniziare con il prefisso `use`.
- Ogni hook dovrebbe avere una responsabilità chiara e riutilizzabile.
- Gli effetti che creano timer o event listener devono includere il cleanup.
- Il componente che usa un hook non deve conoscere i dettagli interni della sua implementazione.
- Verificare il comportamento degli hook interagendo con l’interfaccia.