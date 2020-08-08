import React, { useState } from 'react';
import JSONPretty from 'react-json-pretty';

import { encryptObject, decryptObject } from './cryptoUtils';

function App() {
  const [key, setKey] = useState('');
  const [inputStr, setInputStr] = useState('');

  return (
    <div className="App">
      <h3>Enter key</h3>
      <input value={key} onChange={(e) => setKey(e.target.value)}></input>

      <h3>Input</h3>
      <textarea
        value={inputStr}
        onChange={(e) => setInputStr(e.target.value)}
      ></textarea>

      <h3>Result</h3>
      <JSONPretty data={inputStr} />
    </div>
  );
}

export default App;
