import React from 'react';
import { Link } from 'react-router';
import { Spinner, Toggle, Choice } from 'belle';
import FontAwesome from 'react-fontawesome';

class UserListing extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchUserListings();
  }

  componentWillUnmount(){
  }

  toggleActiveStatus(field){
    return null;
  }

  redirect(route){
    this.props.router.replace(route);
  }

  handleSubmit(){
    return null;
  }

  renderListings(){
    let listings = this.props.currentUserListings;
    if (listings) {
      listings = Object.keys(listings).map(key => {
        let rentals = listings[key].map(rental => {
          return (
            <div className="sub-rental" key={rental.id}>
              Lessee: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b className="listing-sub-header ">{rental.lessee}</b><br/>
              Start Date: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b className="listing-sub-header ">{rental.start_date}</b><br/>
              End Date: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b className="listing-sub-header ">{rental.end_date}</b><br/>
              Total Revenue: &nbsp;<b className="listing-sub-header ">${rental.total}</b>
            </div>
          );
        });
        return (
          <div className="userListing" key={key}>
            <b className="user-listing-sub-header "><Link className="listing-sub-header" to={`listings/${key}`}>These are your rentals for Listing ID#{key}</Link></b>
            <div className="sub-rentals">
              { rentals }
            </div>
          </div>
        );
      });
    } else {
      listings = (
        <div className="userListing">
          <div className="sub-rentals">
            <div className="fjalla">Loading <Spinner /></div>
          </div>
        </div>
      );
    }

    return (
      <div className="aside-current-user-listings">
        { listings }
      </div>
    );
  }

  render(){
    return (
      <div className="main">
        <button className="back-button" onClick={this.props.router.goBack}>Go Back</button><br/>
        { this.renderListings() }
      </div>
    );
  }
}

export default UserListing;
