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
    this.focusSearch = this.focusSearch.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(city){
    if (city === "sf") {
      this.props.receiveCenter({lat: 37.75023068394664, lng: -122.44104483349611});
    } else if (city === "ny") {
      this.props.receiveCenter({lat: 40.7127837, lng: -74.00594130000002});
    }
    this.redirect("search");
  }

  redirect(route){
    this.props.router.replace(route);
  }

  componentDidMount(){
    this.initAutocomplete();
    this.focusSearch();
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

  focusSearch(){
    document.getElementById("autocomplete").focus();
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
    document.getElementById("autocomplete").value = "";
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
    let name = "Login Here";
    let dropDown;
    let fa;
    if (this.props.currentUser === null) {
      fa = (<FontAwesome
        className='fa fa-power-off pointer'
        name="user"
        size="2x"
        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.3)' }}
      />);
      dropDown = (<ul id="gear-dropdown" className={ this.state.dropDownHide ? "gear-dropdown hidden" : "gear-dropdown"}>
                    <li>
                      <ul className="sections">
                        <li><Link onClick={() => this.handleClick("sf")}>SAN FRANCISCO</Link></li>
                        <li><Link onClick={() => this.handleClick("ny")}>NEW YORK</Link></li>
                      </ul>
                    </li>
                    <li>
                      <ul className="help">
                        <li><Link to="contact">Contact</Link></li>
                        <li><Link to="how">How does this work?</Link></li>
                        <li>
                          { this.linkSignIn() }
                        </li>
                      </ul>
                    </li>
                  </ul>
                );
    } else {
      fa = (<FontAwesome
        className='fa fa-user-circle pointer'
        name="user"
        size="2x"
        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.3)' }}
      />);
      name = this.props.currentUser.username;
      dropDown = (<ul id="gear-dropdown" className={ this.state.dropDownHide ? "gear-dropdown hidden" : "gear-dropdown"}>
                  <li>
                    <ul className="sections">
                      <span className="dropdown-subtitle">
                        <Link className='profile' to='profile'>
                          Check your Profile
                        </Link>
                      </span>
                    </ul>
                    <ul className="sections">
                      <li><Link className="gear-item" onClick={this.focusSearch} to="search">Search</Link></li>
                      <li><Link className="gear-item" to="listings">My Listings</Link></li>
                      <li><Link className="gear-item" to="rentals">My Rentals</Link></li>
                    </ul>
                  </li>
                  <li>
                    <ul className="sections">
                      <li><Link className="gear-item" onClick={() => this.handleClick("sf")}>SAN FRANCISCO</Link></li>
                      <li><Link className="gear-item" onClick={() => this.handleClick("ny")}>NEW YORK</Link></li>
                    </ul>
                  </li>
                  <li>
                    <ul className="help">
                      <li><Link className="gear-item" to="contact">Contact</Link></li>
                      <li><Link className="gear-item" to="how">How does this work?</Link></li>
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
          <h1><Link className="website-title" onClick={this.focusSearch} to="search"><div className="logo"></div></Link></h1>
        </nav>
        <nav className="middle-nav">
          <FontAwesome
            className='fa-search fa pointer'
            name="search"
            style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.5)' }}
            onClick={this.focusSearch}
          />
        <input onFocus={this.geolocate()} id="autocomplete" className="searchbar" placeholder="Search a location..."/>
        </nav>
        <nav className="right-nav">
          <ul onClick={this.toggleDropDown}>
            <li id="gear-dropdown-btn">
              <div className='fa'>
                <b className={this.props.currentUser ? "listing-sub-header pointer" : "listing-sub-header red pointer"}>{ name }</b>
                { fa }
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
