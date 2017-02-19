import React from 'react';
import { Link } from 'react-router';
import FontAwesome from 'react-fontawesome';
import Select from 'react-select';
import { Spinner, Rating } from 'belle';
import MapContainer from '../map/map_container';

const Slider = require('rc-slider');
const style = { width: 200, margin: 10, position: 'relative', left: '-12px'};

class Search extends React.Component{
  constructor(props){
    super(props);
    this.renderedSearchResults = this.renderedSearchResults.bind(this);
    this.updateProperty = this.updateProperty.bind(this);
    this.getOptions = this.getOptions.bind(this);
    this.logArrayChange = this.logArrayChange.bind(this);
    this.redirect = this.redirect.bind(this);
    this.state = { brand: null, category: null, rating: undefined, dayRate: undefined };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.logRating = this.logRating.bind(this);
    this.logPrice = this.logPrice.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  componentDidMount(){
    this.props.fetchOptions();
    this.setState({
      brand: this.props.searchFilters.brand,
      category: this.props.searchFilters.category,
      rating: this.props.searchFilters.rating,
      dayRate: this.props.searchFilters.price
    });
  }

  componentWillUnmount(){
    this.setState({ brand: null, category: null, rating: undefined, dayRate: undefined });
    this.props.resetFilters();
  }

  getOptions(key){
    let options;
    if (this.props.options[key]) {
      options = this.props.options[key].map(name => {
        return { value: name, label: name };
      });
    } else {
      options = [{ value: "Loading...", label: "Loading..." }];
    }
    return options;
  }

  redirect(route){
    this.props.clearSessionErrors();
    this.props.router.replace(route);
  }

  logArrayChange(field) {
    return e => {
      const filters = e.map(el => el.value );
      this.setState({ [field]: filters });
      this.props.receiveFilters({ [field]: filters });
    };
  }

  logRating(rating) {
    this.setState({ "rating": rating.value });
    this.props.receiveFilters({ "rating": rating.value });
  }

  logPrice(price) {
    this.setState({ "price": price });
    this.props.receiveFilters({ "price": price });
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.fetchSearchListings(this.props.searchFilters);
  }

  handleMouseEnter(listingId) {
    let listing = markers.filter(el => el.listingId == listingId)[0];
    google.maps.event.trigger(listing, 'mouseover');
  }

  handleMouseLeave(listingId) {
    let listing = markers.filter(el => el.listingId == listingId)[0];
    google.maps.event.trigger(listing, 'mouseout');
  }

  renderedSearchFilters(){
    let count;
    if (this.props.searchListings) {
      count = (<div className="fjalla">We found {Object.keys(this.props.searchListings).length} matches!</div>);
    } else {
      count = (<div className="fjalla">Counting <Spinner /></div>);
    }
    return (
      <div className="aside search-filters">
        { count }<br/>
        <Select
          name="brand-filter"
          options={this.getOptions("brand_options")}
          multi={true}
          onChange={this.logArrayChange("brand")}
          value={this.state.brand}
          placeholder="Select brands.." /><br/>
        <Select
          name="category-filter"
          options={this.getOptions("category_options")}
          multi={true}
          onChange={this.logArrayChange("category")}
          value={this.state.category}
          placeholder="Select categories.." />
        <br/>
          Rating {`>=`} {this.state.rating || " ?"}<br/>
        <Rating defaultValue={null}
          className="rating-filter"
          onUpdate={this.logRating}>
        </Rating><br/><br/>
      <div className="slider" style={style}>
          Price {`<`} ${this.state.price || " ?"}
          <Slider
            min={0}
            max={500}
            defaultValue={500}
            onChange={this.logPrice}/>
        </div><br/>
        <button className="filter" onClick={this.handleSubmit}>Update!</button>
      </div>
    );
  }

  renderedSearchResults(){
    let searchListings = this.props.searchListings;
    let listings;
    if (this.props.searchListings === null) {
      listings = (
        <div className="fjalla"><br/>Loading <Spinner /></div>
      );
    } else {
      listings = Object.keys(searchListings).map(key => searchListings[key]);
      listings = listings.map(listing => {
        let photoSrc = (listing.photos ? listing.photos[0].image_url : "http://res.cloudinary.com/dkympkwdz/image/upload/ar_3:2,c_crop/v1484546400/stock_photo_oimbwy.jpg");
        return (
          <Link className="listing"
            onMouseEnter={() => this.handleMouseEnter(listing.id)}
            onMouseLeave={() => this.handleMouseLeave(listing.id)}
            key={listing.id} to={`listings/${listing.id}`}>
            <img className="listing-thumbnail" src={photoSrc}/>
            <Rating defaultValue={Math.round(listing.rating_average)}
              className="star-rating"
              disabled>
            </Rating>
            <br/><div className="listing-title">{listing.lessor}</div>
            {listing.brand}
            <br/>{listing.category}
            <br/>Day Rate: ${listing.day_rate}
            <br/>Rating: {listing.rating_average}
            <br/>Reviews: {listing.review_count}
          </Link>
        );
      });
    }
    if (listings < 1) listings = ("No Results");
    return (
      <div className="aside search-results">
        {listings}
      </div>
    );
  }

  updateProperty(property){
    return e => this.setState({ [property]: e.target.value });
  }

  render(){
    return (
      <div className="main">
        { this.renderedSearchFilters() }
        { this.renderedSearchResults() }
        <div className="aside search-map">
          Move and zoom the map or use the search bar above to fine tune results!
          <MapContainer />
        </div>
      </div>
    );
  }
}

export default Search;
