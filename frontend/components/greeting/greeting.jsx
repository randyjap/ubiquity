import React from 'react';
import { Link } from 'react-router';

class Greeting extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    let greeting;
    if (this.props.currentUser === null) {
      greeting = (
        <div>
          <h1>Greetings!</h1>
          <p><Link to='signup'>Sign Up!</Link></p>
          <p><Link to='login'>Login!</Link></p>
        </div>
      );
    } else {
      greeting = (
        <div>
          <h1>Hello {this.props.currentUser.username}!</h1>
          <Link to='/' onClick={this.props.logout}>Logout</Link>
        </div>
      );
    }

    return(
      <div id='greeting'>
        {greeting}
      </div>
    );
  }
}

export default Greeting;
