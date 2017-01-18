import React from 'react';
import { Link } from 'react-router';
import { Spinner, Toggle, Choice } from 'belle';
import FontAwesome from 'react-fontawesome';

class UserRental extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchUserRentals();
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

  renderRentals(){
    let rentals;
    if (this.props.currentUserRentals.current_user) {
      rentals = this.props.currentUserRentals.current_user.map(rental => {
        return (
          <div className="current-user-rental" key={rental.id}>
            <ul>
              <li className="user-rental-sub-header"><Link className="user-rental-sub-header" to={`rentals/${rental.listing_id}`}>Rental ID# {rental.id}</Link></li>
              <li>Lessor: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b className="user-rental-sub-header">{rental.lessor}</b></li>
              <li>Start Date: &nbsp;&nbsp;<b className="user-rental-sub-header">{rental.start_date}</b></li>
              <li>End Date: &nbsp;&nbsp;&nbsp;&nbsp;<b className="user-rental-sub-header">{rental.end_date}</b></li>
              <li>Total: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b className="user-rental-sub-header">{rental.total}</b></li>
            </ul>
          </div>
        );
      });
    }
    return rentals;
  }

  render(){
    return (
      <div className="main">
        <div className="current-user-rentals">
          {this.renderRentals()}
        </div>
      </div>
    );
  }
}

export default UserRental;
