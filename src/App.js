import React from 'react';
import JSONPretty from 'react-json-pretty';

function App() {
  return (
    <div className="App">
      <JSONPretty data={{"name": "Chief Oye"}} />
    </div>
  );
}

export default App;
