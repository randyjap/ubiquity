import React from 'react';
import { Link } from 'react-router';
import FontAwesome from 'react-fontawesome';

class Greeting extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="footer">
        <div>
          <li className="footer-items">How it works!</li>
        </div>
        <div>
          <li className="footer-items cities">San Francisco</li>
          <li className="footer-items cities">New York</li>
        </div>
        <div>
          <li className="footer-items">Join us!</li>
        </div>
        <div>
          <li className="footer-items">Contact Me</li>
        </div>
        <div>
          <li className="footer-items">Terms</li>
        </div>
      </div>
    );
  }
}

export default Greeting;
