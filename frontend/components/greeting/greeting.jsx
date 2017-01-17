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
    return (
      <div className="main splash">
        <div className='greeting'>
          <Link className='welcome' to='login'>ENTER SITE</Link>
          <h1 className="slogan">Share, Rent, Get Paid for Your Gear!</h1>
        </div>
      </div>
    );
  }
}

export default Greeting;
