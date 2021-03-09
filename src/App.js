import React, { useState } from 'react';
import Home from './pages/Home';
import Login from './pages/Login';

function App() {

  const [isLog, setIsLog] = useState(false);

  return (
    <div className="App">
      {
        !isLog ?
          <Login isLog={isLog} setIsLog={setIsLog} /> :
          <Home isLog={isLog} setIsLog={setIsLog} />
      }
    </div>
  );
}

export default App;
