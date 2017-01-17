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
    this.props.router.push(route);
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
              Lessee: <b className="listing-sub-header ">{rental.lessee}</b><br/>
              Start Date: <b className="listing-sub-header ">{rental.start_date}</b><br/>
              End Date: <b className="listing-sub-header ">{rental.end_date}</b><br/>
              Total Revenue: <b className="listing-sub-header ">${rental.total}</b>
            </div>
          );
        });
        return (
          <div className="userListing" key={key}>
            <b className="user-listing-sub-header ">These are your rentals for <Link className="listing-sub-header" to={`listings/${key}`}>Listing ID#{key}</Link></b>
            <div className="sub-rentals">
              { rentals }
            </div>
          </div>
        );
      });
    }

    return (
      <div className="aside-current-user-listings">{ listings }</div>
    );
  }

  render(){
    return (
      <div className="main">
        { this.renderListings() }
      </div>
    );
  }
}

export default UserListing;
