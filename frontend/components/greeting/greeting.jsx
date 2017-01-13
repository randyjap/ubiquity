import React from 'react';
import { Link } from 'react-router';
import FontAwesome from 'react-fontawesome';

class Greeting extends React.Component{
  constructor(props){
    super(props);
  }

  linkSignIn(){
    return (
      <Link to='/login'>
        Sign In <FontAwesome
          className='fa-sign-in fa'
          name='signout'
          size='lg'
          style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.3)' }}
        />
      </Link>
    );
  }

  linkSignOut(){
    return (
      <Link to='/' onClick={this.props.logout}>
        Log Out <FontAwesome
          className='fa-sign-out fa'
          name='signout'
          size='lg'
          style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.3)' }}
        />
      </Link>
    );
  }

  render(){
    let greeting;
    let name = "User";
    if (this.props.currentUser === null) {
      greeting = (
        <div className='greeting'>
          &nbsp;
          <Link className='welcome' to='search'>ENTER SITE</Link>
        </div>
      );
    } else {
      greeting = "";
    }

    return (
      <div className="main">
        {greeting}
      </div>
    );
  }
}

export default Greeting;
