import React from 'react';
import { Link } from 'react-router';
import FontAwesome from 'react-fontawesome';

class Contact extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="main splash">
        <button className="back-button" onClick={this.props.router.goBack}>Go Back</button><br/>
        <div className="contact-container">
          <table className="contact">
            <tbody>
              <tr>
                <td><h1 className="contact-header">Randy Jap</h1></td>
              </tr>
              <tr>
                <td><h1 className="contact">Linkedin:</h1></td>
                <td><a className="contact" target="_blank" href="http://www.linkedin.com/in/randyjap">www.linkedin.com/in/randyjap</a></td>
              </tr>
              <tr>
                <td><h1 className="contact">Github:</h1></td>
                <td><a className="contact" target="_blank" href="http://www.github.com/randyjap">www.github.com/randyjap</a></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Contact;
