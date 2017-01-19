import React from 'react';
import { Link } from 'react-router';
import FontAwesome from 'react-fontawesome';

class Terms extends React.Component{
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
                <td><h1 className="contact-header">Terms</h1></td>
              </tr>
              <tr>
                <td>
                  <br/>All listings are for demonstrational purposes only and are completely fictional.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Terms;
