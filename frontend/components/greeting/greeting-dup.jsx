import React from 'react';
import { Link } from 'react-router';
import FontAwesome from 'react-fontawesome';

class Greeting extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    let greeting;
    if (this.props.currentUser === null) {
      greeting = (
        <div id='greeting'>
          <Link className='welcome' to='login'>ENTER SITE</Link>
        </div>
      );
    } else {
      greeting = (
        <div id='greeting'>
          <h1 className='welcome'>
            <FontAwesome
              className='fa-life-ring fa'
              size='lg'
              style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.3)' }}
            />
    Hello {this.props.currentUser.username}!</h1>
          <Link to='/' onClick={this.props.logout}>Logout</Link>
        </div>
      );
    }

    return (
      <div>
        { greeting }
      </div>
    );
  }
}

export default Greeting;
