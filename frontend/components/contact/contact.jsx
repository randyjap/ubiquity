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
                <td><img src="http://res.cloudinary.com/dkympkwdz/image/upload/v1484853581/Logo-2C-21px-R_rc35uu.png" /></td>
                <td><a className="contact" target="_blank" href="http://www.linkedin.com/in/randyjap">www.linkedin.com/in/randyjap</a></td>
              </tr>
              <tr>
                <td><img src="http://res.cloudinary.com/dkympkwdz/image/upload/v1484853612/GitHub-Mark-64px_rfmfmn.png" /></td>
                <td><a className="contact" target="_blank" href="http://www.github.com/randyjap">www.github.com/randyjap</a></td>
              </tr>
              <tr>
                <td><img src="http://res.cloudinary.com/dkympkwdz/image/upload/v1484853612/GitHub-Mark-64px_rfmfmn.png" /></td>
                <td><a className="contact" target="_blank" href="http://www.github.com/randyjap/ubiquity">www.github.com/randyjap/ubiquity</a></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Contact;
