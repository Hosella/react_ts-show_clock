import { useState } from 'react';
import { Clock } from '../Clock';
import './App.scss';

function App() {
  const [hasClock, setHasClock] = useState<boolean>(true);
  const [clockName, setClockName] = useState<number>(0);

  return (
    <div className="App">
      <button
        onClick={() => {setHasClock(true)}}
        onContextMenu={(event) => { event.preventDefault(); setHasClock(false)}}
      >
        {hasClock ? 'Hide' : 'Show'}
      </button>

      {hasClock && <Clock name={clockName} setName={setClockName} />}
    </div>
  );
}

export default App;
