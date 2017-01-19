import React from 'react';
import { Link } from 'react-router';
import FontAwesome from 'react-fontawesome';

class How extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="main splash">
        <button className="back-button" onClick={this.props.router.goBack}>Go Back</button><br/>
        <div className="how-container">
          <div className="square-logo-how"></div>
          <table className="contact">
            <tbody>
              <tr>
                <td><h1 className="contact-header">Youbquity</h1></td>
              </tr>
              <tr>
                <td>
                  <br/>
                  <p className="how">Make the most of your equipment.</p>
                  <p className="how">Rent out your equipment.</p>
                  <p className="how">Save the environment.</p>
                  <p className="how">And make extra money.</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default How;
