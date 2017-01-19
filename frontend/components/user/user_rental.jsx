import React from 'react';
import { Link } from 'react-router';
import { Spinner, Rating, TextInput } from 'belle';
import FontAwesome from 'react-fontawesome';
import RatingForm from './rating_form';

class UserRental extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchUserRentals();
  }

  componentWillUnmount(){
  }

  redirect(route){
    this.props.router.replace(route);
  }

  renderRentals(){
    let rentals;
    if (this.props.currentUserRentals.current_user) {
      rentals = this.props.currentUserRentals.current_user.map(rental => {
        let review;
        if (rental.rating) {
          review = (
            <div>
              <li>Rating: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b className="user-rental-sub-header">{rental.rating}</b></li>
              <li><br/>Review:<br/><b className="user-rental-sub-header">{rental.review}</b></li>
            </div>
          );
        } else {
          review = (
            <div>
              <RatingForm id={rental.id} submitReview={this.props.submitReview}/>
            </div>
          );
        }
        return (
          <div className="current-user-rental" key={rental.id}>
            <ul>
              <li className="user-rental-sub-header">Rental ID# {rental.id}</li>
              <li>Lessor: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b className="user-rental-sub-header">{rental.lessor}</b></li>
              <li>Start Date: &nbsp;&nbsp;<b className="user-rental-sub-header">{rental.start_date}</b></li>
              <li>End Date: &nbsp;&nbsp;&nbsp;&nbsp;<b className="user-rental-sub-header">{rental.end_date}</b></li>
              <li>Total: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b className="user-rental-sub-header">{rental.total}</b></li>
              { review }
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
        <button className="back-button" onClick={this.props.router.goBack}>Go Back</button><br/>
        <div className="current-user-rentals">
          {this.renderRentals()}
        </div>
      </div>
    );
  }
}

export default UserRental;
