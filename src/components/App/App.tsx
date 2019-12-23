import React from 'react';
import './App.scss';

export interface IStateProps {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}

export interface IAppProps extends IStateProps {};

export const App: React.FC<IAppProps> = ({
  count,
  increment,
  decrement,
  reset
}) => {
  return (
    <div className="App">
      <div>
        <button onClick={increment}>INCREMENT</button>
        <button onClick={decrement}>DECREMENT</button>
        <button onClick={reset}>RESET</button>
      </div>
      <div>
        {count}
      </div>
    </div>
  );
}
