import React, { useState } from 'react';
import JSONPretty from 'react-json-pretty';

import { encryptObject, decryptObject } from './cryptoUtils';

function App() {
  const [key, setKey] = useState('');
  const [inputStr, setInputStr] = useState('');
  const [result, setResult] = useState('');

  const encryptInput = (str) => {
    const encryptedStr = encryptObject(JSON.parse(inputStr), key);
    setResult(encryptedStr);
  };

  const decryptInput = (str) => {
    const decryptedStr = decryptObject(inputStr, key);
    setResult(decryptedStr);
  };

  return (
    <div className="App">
      <h3>Enter key</h3>
      <input value={key} onChange={(e) => setKey(e.target.value)}></input>

      <h3>Input</h3>
      <textarea
        value={inputStr}
        onChange={(e) => setInputStr(e.target.value)}
      ></textarea>

      <button onClick={encryptInput}>Encrypt</button>
      <button onClick={decryptInput}>Decrypt</button>

      <h3>Result</h3>
      <JSONPretty data={result} />
    </div>
  );
}

export default App;
