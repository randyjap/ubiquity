import React from 'react';
import { Link, withRouter } from 'react-router';

class Footer extends React.Component{
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.redirect = this.redirect.bind(this);
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

  render(){
    return (
      <div className="footer">
        <div>
          <li className="footer-items">HOW IT WORKS!</li>
        </div>
        <div>
          <li className="footer-items cities" onClick={() => this.handleClick("sf")}>San Francisco</li>
          <li className="footer-items cities" onClick={() => this.handleClick("ny")}>NEW YORK</li>
        </div>
        <div>
          <li className="footer-items">JOIN US!</li>
        </div>
        <div>
          <li className="footer-items">CONTACT ME</li>
        </div>
        <div>
          <li className="footer-items">TERMS</li>
        </div>
      </div>
    );
  }
}

export default withRouter(Footer);
