import React from 'react';
import { Link } from 'react-router';
import FontAwesome from 'react-fontawesome';

class Nav extends React.Component{
  constructor(props){
    super(props);
    this.state = { dropDownHide: false };
    this.handleLogout = this.handleLogout.bind(this);
    this.toggleDropDown = this.toggleDropDown.bind(this);
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

  handleLogout(){
    this.props.logout();
    this.props.router.push('/');
  }

  linkSignOut(){
    return (
      <Link to='/' onClick={this.handleLogout}>
        Log Out <FontAwesome
          className='fa-sign-out fa'
          name='signout'
          size='lg'
          style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.3)' }}
        />
      </Link>
    );
  }

  toggleDropDown(){
    this.setState({ dropDownHide: !this.state.dropDownHide });
  }

  render(){
    let name = "User";
    let mainBar;
    if (this.props.currentUser === null) {
      mainBar = (
        <header className="main-nav">
          <nav className="left-nav">
            <h1 className="title">Youbiquity</h1>
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
            <ul onClick={this.toggleDropDown}>
              <li id="gear-dropdown-btn">
                <div className='fa'>
                  <FontAwesome
                    className='fa fa-user-o'
                    name="user"
                    size="2x"
                    style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.3)' }}
                  />
                </div>
                <ul id="gear-dropdown" className={ this.state.dropDownHide ? "gear-dropdown" : "gear-dropdown hidden"}>
                  <li>
                    <ul className="help">
                      <li><a href="#">How does this work?</a></li>
                      <li><a href="#">Contact Us</a></li>
                      <li>
                        { this.linkSignIn() }
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </header>
      );
    } else {
      name = this.props.currentUser.username;
      mainBar = (
        <header className="main-nav">
          <nav className="left-nav">
            <h1 className="title">Youbiquity</h1>
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
            <ul onClick={this.toggleDropDown}>
              <li id="gear-dropdown-btn">
                <div className='fa'>
                  <FontAwesome
                    className='fa fa-user-o'
                    name="user"
                    size="2x"
                    style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.3)' }}
                  />
                </div>
                <ul id="gear-dropdown" className={ this.state.dropDownHide ? "gear-dropdown" : "gear-dropdown hidden"}>
                  <li>
                    <ul className="editions">
                      <span className="dropdown-subtitle">
                        <Link className='dropdown' to='profile'>
                          { name }
                        </Link>
                      </span>
                    </ul>
                    <ul className="editions">
                      <li><Link to="search">Search</Link></li>
                      <li><a href="#">Listings</a></li>
                      <li><a href="#">Rentals</a></li>
                    </ul>
                  </li>
                  <li>
                    <ul className="help">
                      <li><a href="#">How this works</a></li>
                      <li><a href="#">Contact Us</a></li>
                      <li>
                        { this.linkSignOut() }
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </header>
      );
    }

    return (
      <div className="nav">
        {mainBar}
      </div>
    );
  }
}

export default Nav;
