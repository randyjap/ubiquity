import React from 'react';
import { Link, withRouter } from 'react-router';
import FontAwesome from 'react-fontawesome';

class Nav extends React.Component{
  constructor(props){
    super(props);
    this.state = { dropDownHide: true };
    this.handleLogout = this.handleLogout.bind(this);
    this.toggleDropDown = this.toggleDropDown.bind(this);
    this.initAutocomplete = this.initAutocomplete.bind(this);
    this.updateLocation = this.updateLocation.bind(this);
    this.geolocate = this.geolocate.bind(this);
    this.redirect = this.redirect.bind(this);
  }

  redirect(route){
    this.props.router.replace(route);
  }

  componentDidMount(){
    this.initAutocomplete();
  }

  initAutocomplete() {
    let autocomplete = new google.maps.places.Autocomplete(
        /** @type {!HTMLInputElement} */(document.getElementById('autocomplete')),
        {types: ['geocode']});
    autocomplete.addListener('place_changed', this.updateLocation);
    this.autocomplete = autocomplete;
  }

  updateLocation() {
    let lat = this.autocomplete.getPlace().geometry.location.lat();
    let lng = this.autocomplete.getPlace().geometry.location.lng();
    let searchAddress = this.autocomplete.getPlace().formatted_address;
    let latlng = {
      lat: lat,
      lng: lng
    };
    this.redirect('search');
    this.setState({ searchAddress, latlng });
    this.props.receiveCenter(latlng);
  }

  geolocate() {
    let that = this;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var geolocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        var circle = new google.maps.Circle({
          center: geolocation,
          radius: position.coords.accuracy
        });
        that.autocomplete.setBounds(circle.getBounds());
      });
    }
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
    this.props.router.replace('/');
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
    let dropDown;
    if (this.props.currentUser === null) {
      dropDown = (<ul id="gear-dropdown" className={ this.state.dropDownHide ? "gear-dropdown hidden" : "gear-dropdown"}>
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
                );
    } else {
      name = this.props.currentUser.username;
      dropDown = (<ul id="gear-dropdown" className={ this.state.dropDownHide ? "gear-dropdown hidden" : "gear-dropdown"}>
                  <li>
                    <ul className="editions">
                      <span className="dropdown-subtitle">
                        <Link className='dropdown' to='profile'>
                          Check Profile: { name }
                        </Link>
                      </span>
                    </ul>
                    <ul className="editions">
                      <li><Link to="search">Search</Link></li>
                      <li><Link to="listings">My Listings</Link></li>
                      <li><Link to="rentals">My Rentals</Link></li>
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
              );
    }
    const mainBar = (
      <header className="main-nav">
        <nav className="left-nav">
          <h1><Link className="website-title" to="search"><div className="logo"></div></Link></h1>
        </nav>
        <nav className="middle-nav">
          <FontAwesome
            className='fa-search fa'
            name="search"
            size="2x"
            style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.3)' }}
          />
        <input onFocus={this.geolocate()} id="autocomplete" className="searchbar" placeholder="Search near..."/>
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
              { dropDown }
            </li>
          </ul>
        </nav>
      </header>
    );
    return (
      <div className="nav">
        {mainBar}
      </div>
    );
  }
}

export default withRouter(Nav);
