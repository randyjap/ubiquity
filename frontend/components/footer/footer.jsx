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
          <li className="footer-items">HOW IT WORKS!</li>
        </div>
        <div>
          <li className="footer-items cities">SAN Francisco</li>
          <li className="footer-items cities">NEW YORK</li>
        </div>
        <div>
          <li className="footer-items">JOIN US!</li>
        </div>
        <div>
          <li className="footer-items">CONTACT ME</li>
        </div>
        <div>
          <li className="footer-items">TERMS</li>
        </div>
      </div>
    );
  }
}

export default Greeting;
