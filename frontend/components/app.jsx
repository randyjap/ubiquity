import React from 'react';
import GreetingContainer from './greeting/greeting_container';

const App = ({ children }) => (
  <div className="wrapper">
    <header>
      <GreetingContainer />
    </header>
    { children }
  </div>
);

export default App;
