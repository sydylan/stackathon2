import "./App.css";
import CountdownTimer from "./Components/CountdownTimer/CountdownTimer";

function App() {
  const durationInMilliseconds = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
  const countdownTimestampMs = new Date().getTime() + durationInMilliseconds;

  return (
    <div className="App">
      <CountdownTimer countdownTimestampMs={countdownTimestampMs} />
    </div>
  );
}

export default App;
