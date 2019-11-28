import React, { useState } from 'react';
import './App.scss';

const App: React.FC = () => {
  const [count, setCount] = useState(3);

  return (
    <div 
      className="App"
      onClick={() => setCount(count + 1)}
      onMouseDown={e => e.preventDefault()}
    >
      {`Hello D${count}!`}
    </div>
  );
}

export default App;
