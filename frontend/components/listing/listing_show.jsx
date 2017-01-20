import React from 'react';
import { Link } from 'react-router';
import { Spinner, Rating, DatePicker } from 'belle';
import FontAwesome from 'react-fontawesome';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class ListingShow extends React.Component {
  constructor(props){
    super(props);
    this.logDate = this.logDate.bind(this);
    this.toggleDropDown = this.toggleDropDown.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateThumbnail = this.updateThumbnail.bind(this);
    this.userReviews = this.userReviews.bind(this);
    this.state = {
      pickUp: true,
      dropOff: true,
      start_date: "../../..",
      end_date: "../../..",
      success: false
    };
  }

  firstMainImage(data){
    const photoData = data.listing.photos;
    if (photoData.length === 0) {
      this.setState({ mainListingImage: "http://thumb9.shutterstock.com/display_pic_with_logo/114367/229591876/stock-photo-vintage-camera-on-wooden-bench-in-autumn-park-instagram-style-toned-photo-229591876.jpg" });
    } else {
      this.setState({ mainListingImage: photoData[0].image_url });
    }
  }

  componentDidMount(){
    this.props.fetchListing(this.props.routeParams.listingId)
      .then((data) => this.firstMainImage(data));
    this.setState({ id: this.props.routeParams.listingId });
  }

  componentWillUnmount(){
    this.props.clearSessionErrors();
  }

  logDate(field){
    const that = this;
    return date => {
      this.setState({ pickUp: true, dropOff: true });
      this.setState({ [field]: date.value });
    };
  }

  toggleDropDown(field){
    this.setState({ [field]: !this.state[field] });
  }

  redirect(route){
    this.props.router.replace(route);
    this.props.clearSessionErrors();
  }

  setSuccess(){
    this.setState({ success: true });
  }

  handleSubmit(){
    const rental = {
      start_date: this.state.start_date,
      end_date: this.state.end_date,
      id: this.state.id
    };
    this.props.bookListing({ rental })
      .then(() => this.setSuccess())
      .then(() => this.props.fetchListing(this.props.routeParams.listingId));
  }

  renderErrors(){
    if (this.props.errors.length > 0) {
    return(
      <div className="listing-errors">
        <ul className="listing-errors">
          {this.props.errors.map((error, i) => (
            <li key={`error-${i}`}>
              {error}
            </li>
          ))}
        </ul>
      </div>
    );
    } else {
      return null;
    }
  }

  updateThumbnail(e){
    this.setState({ mainListingImage: e.target.src });
  }

  renderPhotos(){
    let photos = this.props.listing.photos;
    const thumbnails = photos.map(photo => {
      return (
        <img className="listing-thumbnail" onClick={this.updateThumbnail} key={photo["photo_id"]} src={photo["image_url"]}/>
      );
    });
    return (
      <div className="listing-thumbnails">
        { thumbnails }
      </div>
    );
  }

  userReviews(){
    let reviews = this.props.listing.reviews;
    if (reviews) {
      reviews = reviews.map(review => {
        return (
          <div className="user-review" key={review.id}>
            <Rating defaultValue={review.rating}
              className="listing-star-rating user-review-rating"
              character={'✪'}
              disabled/><br/>
            <div className="review-sub-header">{review.date} ago {review.lessee} said...</div>
            <div className="review-text-container">{review.review_text}</div>
          </div>
        );
      });
    }
    return reviews;
  }

  rentalDates(){
    let rentals = this.props.listing.rentals;
    if (rentals) {
      rentals = rentals.map(rental => {
        return (
          <div className="rental-date" key={rental.id}>
            {rental.start_date} - {rental.end_date}
          </div>
        );
      });
    }
    return rentals;
  }

  render(){
    let main;
    let pickUpDate;
    let dropOffDate;

    const listing = this.props.listing;
    if (listing === null) {
      main = (
        <div className="main">
          <div>Loading <Spinner characterStyle={{ fontSize: 20 }} /> </div>
        </div>
      );
    } else {
      main = (
        <div className="main">
          <div className="fixed">
            <nav className="back-button"><button className="back-button" onClick={this.props.router.goBack}>Go Back</button></nav>
          </div>
          <div className="aside-2">
            <h1 className="listing-title">{listing.listing_title}</h1>
            <div className="listing-image">
              <img className="main-listing-image" src={this.state.mainListingImage} />
            </div>
            { this.renderPhotos() }
            <br/>
            <table>
              <tbody>
              <tr>
                <td><b className="listing-sub-header">Brand:</b></td>
                <td> {listing.brand}</td>
              </tr>
              <tr>
                <td><b className="listing-sub-header">Category:</b></td>
                <td> {listing.category}</td>
              </tr>
              <tr>
                <td><b className="listing-sub-header">Location:</b></td>
                <td> {listing.location}</td>
              </tr>
              <tr>
                <td><b className="listing-sub-header">Replacement Value:</b></td>
                <td> ${listing.replacement_value}</td>
              </tr>
              <tr>
                <td><b className="listing-sub-header">Serial:</b></td>
                <td> {listing.serial}</td>
              </tr>
              </tbody>
            </table><br/>
          <p><b className="listing-sub-header">{listing.detail_desc}</b></p><br/>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <br/>
            <div className="user-reviews">
              <b className="listing-sub-header">This is what our community had to say:</b>
              { this.userReviews() }
            </div>
          </div>
          <div className="aside-3">
            <h1 className="listing-title">Book this rental today!</h1>
            <br/><br/><br/>
            <h1 className="listing-title">{listing.lessor} ({listing.review_count})</h1>
            <Rating defaultValue={Math.round(listing.rating_average)}
              className="listing-star-rating"
              character={'✪'}
              disabled></Rating>
            <table className="selection-menu">
              <tbody>
                <tr>
                  <td><b className="listing-sub-header">Pick Up On:</b></td>
                  <td>
                    <FontAwesome onClick={() => this.toggleDropDown("pickUp")} className='fa-calendar fa-listing pointer' name='calendar' style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.3)' }}/>
                    <DatePicker className={ this.state.pickUp ? "calendar hidden" : "calendar pointer"} onUpdate={this.logDate("start_date")}/>
                    <b className="pointer" onClick={() => this.toggleDropDown("pickUp")}>{ typeof this.state.start_date === 'object' ? this.state.start_date.toDateString() : this.state.start_date }</b>
                  </td>
                </tr>
                <tr>
                  <td><b className="listing-sub-header">Drop Off On:</b></td>
                  <td>
                    <FontAwesome onClick={() => this.toggleDropDown("dropOff")} className='fa-calendar fa-listing pointer' name='calendar' style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.3)' }}/>
                    <DatePicker className={ this.state.dropOff ? "calendar hidden" : "calendar pointer"} onUpdate={this.logDate("end_date")}/>
                    <b className="pointer" onClick={() => this.toggleDropDown("dropOff")}>{ typeof this.state.end_date === 'object' ? this.state.end_date.toDateString() : this.state.end_date }</b>
                  </td>
                </tr>
                <tr>
                  <td><b className="listing-sub-header">Daily Rate:</b></td>
                  <td>${listing.day_rate}</td>
                </tr>
                <tr>
                  <td><b className="listing-sub-header">Total:</b></td>
                  <td className="total">
                    {
                      typeof this.state.start_date === 'object'
                        && typeof this.state.end_date === 'object'
                        && this.state.end_date > this.state.start_date ?
                      `$${listing.day_rate *
                        Math.round((this.state.end_date - this.state.start_date)
                        / (1000*60*60*24))}`
                      : ""
                    }
                  </td>
                </tr>
              </tbody>
            </table>
            <Link className={this.state.success ? "book disabled" : "book"} onClick={this.handleSubmit}>{this.state.success ? "Booked!" : "Book!" }</Link><br/><br/><br/><br/>
            {this.renderErrors()}
            {this.state.success ? (<div className="success-booking">Booking successfull!  Thank you!</div>) : ""}
            <br/>
            <b className="listing-sub-header">These dates have been taken:</b>
              <ReactCSSTransitionGroup
                transitionName="example"
                transitionAppear={true}
                transitionAppearTimeout={1000}
                transitionEnterTimeout={1000}
                transitionLeaveTimeout={600}>
                { this.rentalDates() }
              </ReactCSSTransitionGroup>
          </div>
        </div>
      );
    }
    return main;
  }
}

export default ListingShow;
