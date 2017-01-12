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
    let signing;
    let mainBar;
    if (this.props.currentUser === null) {
      signing = this.linkSignIn();
      greeting = (
        <div id='greeting'>
          <Link className='welcome' to='login'>ENTER SITE</Link>
        </div>
      );
      mainBar = (
        <div>
          { greeting }
          <header className="main-nav sticky">
          	<nav className="left-nav">
              <h1 className="title">Ubiquity</h1>
          	</nav>
          	<nav className="middle-nav">
              <FontAwesome
                className='fa-search fa'
                name="search"
                size="2x"
                style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.3)' }}
              />
              <input className="searchbar" placeholder="Search near..."/>
          	</nav>
          	<nav className="right-nav">
          		<ul>
          			<li id="gear-dropdown-btn">
                  <div className='fa'>
                    <FontAwesome
                      className='fa fa-user-o'
                      name="user"
                      size="2x"
                      style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.3)' }}
                    />
                  </div>
          				<ul id="gear-dropdown" className="gear-dropdown hidden">
          					<li>
          						<ul className="help">
          							<li><a href="#">How does this work?</a></li>
          							<li><a href="#">Contact Us</a></li>
          							<li>
                          { signing }
          							</li>
          						</ul>
          					</li>
          				</ul>
          			</li>
          		</ul>
          	</nav>
          </header>
        </div>
      );
    } else {
      signing = this.linkSignOut();
      name = this.props.currentUser.username;
      greeting = (
        <div id='greeting'>
          <h1 className='welcome'>
            <FontAwesome
              className='fa-life-ring fa'
              name="lifering"
              size='lg'
              style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.3)' }}
            />
            Hello {this.props.currentUser.username}!
            <Link to='/' onClick={this.props.logout}>
              <FontAwesome
                className='fa-sign-out fa'
                name='signout'
                size='lg'
                style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.3)' }}
              />
            </Link>
          </h1>
        </div>
      );
      mainBar = (
        <div>
          { greeting }
          <header className="main-nav">
          	<nav className="left-nav">
              <h1 className="title">Ubiquity</h1>
          	</nav>
          	<nav className="middle-nav">
              <FontAwesome
                className='fa-search fa'
                name="search"
                size="2x"
                style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.3)' }}
              />
              <input className="searchbar" placeholder="Search near..."/>
          	</nav>
          	<nav className="right-nav">
          		<ul>
          			<li id="gear-dropdown-btn">
                  <div className='fa'>
                    <FontAwesome
                      className='fa fa-user-o'
                      name="user"
                      size="2x"
                      style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.3)' }}
                    />
                  </div>
          				<ul id="gear-dropdown" className="gear-dropdown hidden">
          					<li>
          						<ul className="editions">
          							<span className="dropdown-subtitle">
                          <Link className='dropdown' to='profile'>
                            {name}
                          </Link>
                        </span>
                      </ul>
                      <ul className="editions">
          							<li><a href="#">Listings</a></li>
          							<li><a href="#">Rentals</a></li>
          						</ul>
          					</li>
          					<li>
          						<ul className="help">
          							<li><a href="#">How this works</a></li>
          							<li><a href="#">Contact Us</a></li>
          							<li>
                          { signing }
          							</li>
          						</ul>
          					</li>
          				</ul>
          			</li>
          		</ul>
          	</nav>
          </header>
        </div>
      );
    }

    return (
      <div>
        {mainBar}
        <div className='main-section'>

        </div>
      </div>
    );
  }
}

export default Greeting;
