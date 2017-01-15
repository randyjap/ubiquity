import React from 'react';
import { Link } from 'react-router';
import FontAwesome from 'react-fontawesome';
import SearchFilter from './search_filter';
import Select from 'react-select';
import belle from 'belle';
import Map from '../map/map';

var TextInput = belle.TextInput;
var Spinner = belle.Spinner;
var Rating = belle.Rating;

const Slider = require('rc-slider');
const style = { width: 150, margin: 10 };

class Search extends React.Component{
  constructor(props){
    super(props);
    this.renderedSearchResults = this.renderedSearchResults.bind(this);
    this.updateProperty = this.updateProperty.bind(this);
    this.getOptions = this.getOptions.bind(this);
    this.logArrayChange = this.logArrayChange.bind(this);
    this.state = { brand: [], category: [], rating: undefined, dayRate: undefined };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.logChange = this.logChange.bind(this);
  }

  componentDidMount(){
    let filters = this.props.searchFilters;
    this.props.fetchAllFilterOptions();
    this.props.fetchSearchListings(filters);
  }

  getOptions(key){
    let options;
    if (this.props.searchFilters[key]) {
      options = this.props.searchFilters[key].map(name => {
        return { value: name, label: name };
      });
    } else {
      options = [{ value: "Loading...", label: "Loading..." }];
    }
    return options;
  }

  redirect(route){
    this.props.clearSessionErrors();
    this.props.router.push(route);
  }

  logArrayChange(field) {
    return e => {
      const filters = e.map(el => el.value );
      this.setState({ [field]: filters });
    };
  }

  logChange(rating) {
    this.setState({ "rating": rating.value });
  }

  handleSubmit(){
    this.props.fetchSearchListings(this.state);
  }

  ping(value){
    console.log(value);
  }

  renderedSearchFilters(){
    return (
      <div className="aside search-filters">
        <Select
          name="brand-filter"
          options={this.getOptions("brand")}
          multi={true}
          onChange={this.logArrayChange("brand")}
          value={this.state.brand}
          onClose={this.handleSubmit}
          placeholder="Select brands.." />
        <Select
          name="category-filter"
          options={this.getOptions("category")}
          multi={true}
          onChange={this.logArrayChange("category")}
          value={this.state.category}
          onClose={this.handleSubmit}
          placeholder="Select categories.." />
        <Rating defaultValue={1}
          className="rating-filter"
          character={'✪'}
          onUpdate={this.logChange}
          onMouseLeave={this.handleSubmit}>
        </Rating>
        <div style={style}>
          Price
          <Slider min={0} max={500} onChange={this.ping} />
        </div>
      </div>
    );
  }

  renderedSearchResults(){
    let searchListings = this.props.searchListings;
    let listings;
    if (this.props.searchListings === null) {
      listings = (
        <div className="loading">Loading <Spinner characterStyle={{ fontSize: 20 }} />
        </div>
      );
    } else {
      listings = Object.keys(searchListings).map(key => searchListings[key]);
      listings = listings.map(listing => {
        return (
          <Link className="listing" key={listing.id} to={`listings/${listing.id}`}>
            <Rating defaultValue={Math.round(listing.rating_average)}
              className="star-rating"
              character={'✪'}
              disabled>
            </Rating>
            <br/><div className="listing-title">{listing.lessor}</div>
            {listing.brand}
            <br/>{listing.category}
            <br/>Day Rate: ${listing.day_rate}
            <br/>Rating: {listing.rating_average}
            <br/>Reviews: {listing.review_count}
            <br/>{listing.listing_title}
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
        </div>
      </div>
    );
  }
}

export default Search;

// <Map searchListings={this.props.searchListings} />
