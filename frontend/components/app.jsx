import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import NavContainer from './nav/nav_container';
import Footer from './footer/footer';

const App = ({ children }) => (
  <div className="wrapper">
    <NavContainer />
      { children }
    <Footer />
  </div>
);

export default App;
