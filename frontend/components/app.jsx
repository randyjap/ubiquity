import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import NavContainer from './nav/nav_container';
import FooterContainer from './footer/footer_container';

const App = ({ children }) => (
  <div className="wrapper">
    <NavContainer />
      { children }
    <FooterContainer />
  </div>
);

export default App;
