import React from 'react';
import { Link } from 'react-router';
import { Spinner, Rating, DatePicker } from 'belle';
import FontAwesome from 'react-fontawesome';

class ListingDetail extends React.Component {
  constructor(props){
    super(props);
    this.logDate = this.logDate.bind(this);
    this.toggleDropDown = this.toggleDropDown.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      pickUp: true,
      dropOff: true,
      start_date: "../../..",
      end_date: "../../..",
      success: false
    };
  }

  componentDidMount(){
    this.props.fetchListing(this.props.routeParams.listingId);
    this.setState({ id: this.props.routeParams.listingId });
  }

  logDate(field){
    const that = this;
    return date => {
      this.setState({ pickUp: true, dropOff: true });
      this.setState({ [field]: date.value });
      console.log(date.value);
      console.log(field);
      console.log(this);
    };
  }

  toggleDropDown(field){
    this.setState({ [field]: !this.state[field] });
  }

  redirect(route){
    this.props.router.push(route);
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
      .then(() => this.setSuccess());
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
      const thumbnails = (
        <div className='listing-thumbnails'>
            <img className="listing-thumbnail" src="http://thumb9.shutterstock.com/display_pic_with_logo/114367/229591876/stock-photo-vintage-camera-on-wooden-bench-in-autumn-park-instagram-style-toned-photo-229591876.jpg" />
            <img className="listing-thumbnail" src="http://thumb9.shutterstock.com/display_pic_with_logo/114367/229591876/stock-photo-vintage-camera-on-wooden-bench-in-autumn-park-instagram-style-toned-photo-229591876.jpg" />
            <img className="listing-thumbnail" src="http://thumb9.shutterstock.com/display_pic_with_logo/114367/229591876/stock-photo-vintage-camera-on-wooden-bench-in-autumn-park-instagram-style-toned-photo-229591876.jpg" />
            <img className="listing-thumbnail" src="http://thumb9.shutterstock.com/display_pic_with_logo/114367/229591876/stock-photo-vintage-camera-on-wooden-bench-in-autumn-park-instagram-style-toned-photo-229591876.jpg" />
            <img className="listing-thumbnail" src="http://thumb9.shutterstock.com/display_pic_with_logo/114367/229591876/stock-photo-vintage-camera-on-wooden-bench-in-autumn-park-instagram-style-toned-photo-229591876.jpg" />
            <img className="listing-thumbnail" src="http://thumb9.shutterstock.com/display_pic_with_logo/114367/229591876/stock-photo-vintage-camera-on-wooden-bench-in-autumn-park-instagram-style-toned-photo-229591876.jpg" />
            <img className="listing-thumbnail" src="http://thumb9.shutterstock.com/display_pic_with_logo/114367/229591876/stock-photo-vintage-camera-on-wooden-bench-in-autumn-park-instagram-style-toned-photo-229591876.jpg" />
            <img className="listing-thumbnail" src="http://thumb9.shutterstock.com/display_pic_with_logo/114367/229591876/stock-photo-vintage-camera-on-wooden-bench-in-autumn-park-instagram-style-toned-photo-229591876.jpg" />
            <img className="listing-thumbnail" src="http://thumb9.shutterstock.com/display_pic_with_logo/114367/229591876/stock-photo-vintage-camera-on-wooden-bench-in-autumn-park-instagram-style-toned-photo-229591876.jpg" />
        </div>
      );
      main = (
        <div className="main">
          <div className="aside-2">
            <h1 className="listing-title">{listing.listing_title}</h1>
            <div className="listing-image">
              <img className="listing-image" src="http://thumb9.shutterstock.com/display_pic_with_logo/114367/229591876/stock-photo-vintage-camera-on-wooden-bench-in-autumn-park-instagram-style-toned-photo-229591876.jpg" />
            </div>
            {thumbnails}
            <br/><p>{listing.detail_desc}</p><br/>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          <div className="aside-3">
            <h1 className="listing-title">{listing.lessor} ({listing.review_count})</h1>
            <Rating defaultValue={Math.round(listing.rating_average)}
              className="listing-star-rating"
              character={'✪'}
              disabled></Rating><br/><br/><br/>
            <div className="cal-div" onClick={() => this.toggleDropDown("pickUp")}>
              Pick Up On:<FontAwesome onClick={() => this.toggleDropDown("pickUp")} className='fa-calendar fa-listing' name='calendar' style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.3)' }}/>
              { typeof this.state.start_date === 'object' ? this.state.start_date.toDateString() : this.state.start_date }
            </div>
            <DatePicker className={ this.state.pickUp ? "calendar hidden" : "calendar"} onUpdate={this.logDate("start_date")}/>
            <br/><br/>
            <div className="cal-div" onClick={() => this.toggleDropDown("dropOff")}>
              Drop Off On: <FontAwesome onClick={() => this.toggleDropDown("dropOff")} className='fa-calendar fa-listing' name='calendar' style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.3)' }}/>
              { typeof this.state.end_date === 'object' ? this.state.end_date.toDateString() : this.state.end_date }
            </div>
            <DatePicker className={ this.state.dropOff ? "calendar hidden" : "calendar"} onUpdate={this.logDate("end_date")}/>
            <br/><br/>
            <p>Daily Rate: ${listing.day_rate}</p>
            <br/><br/>
            <p className="total">Total: $
              {
                typeof this.state.start_date === 'object'
                  && typeof this.state.end_date === 'object'
                  && this.state.end_date > this.state.start_date ?
                listing.day_rate *
                  Math.round((this.state.end_date - this.state.start_date)
                  / (1000*60*60*24))
                : ""
              }
            </p>
            <Link className="book" onClick={this.handleSubmit}>Book!</Link><br/><br/><br/><br/>
            {this.renderErrors()}
            {this.state.success ? (<div className="success-booking">Succesfully booked!  Thank you!</div>) : ""}
          </div>
        </div>
      );
    }
    return main;
  }
}

export default ListingDetail;
