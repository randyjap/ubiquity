import React from 'react';
import { Link } from 'react-router';
import FontAwesome from 'react-fontawesome';
import SearchFilter from './search_filter';
import Select from 'react-select';
import belle from 'belle';

var TextInput = belle.TextInput;
var Spinner = belle.Spinner;
var Rating = belle.Rating;

class Search extends React.Component{
  constructor(props){
    super(props);
    this.renderedSearchResults = this.renderedSearchResults.bind(this);
    this.updateProperty = this.updateProperty.bind(this);
    this.getOptions = this.getOptions.bind(this);
    this.logChange = this.logChange.bind(this);
    this.state = { brand: [] };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    let filters = this.props.searchFilters;
    this.props.fetchAllFilterOptions();
    this.props.fetchSearchListings(filters);
  }

  getOptions(key){
    let options;
    if (this.props.searchFilters["brand"]) {
      options = this.props.searchFilters["brand"].map(name => {
        return { value: name, label: name };
      });
    } else {
      options = [{ value: "Loading...", label: "Loading..." }];
    }
    return options;
  }

  logChange(field) {
    return e => {
      this.setState({ [field]: e });
    };
  }

  handleSubmit(field){
    return e => {
      e.preventDefault();
      let filters = this.state[field].map(obj => {
        return obj.value;
      });
      console.log({[field]: filters});
      console.log(this.props.searchFilters);
      this.props.fetchSearchListings({[field]: filters});
    };
  }

  renderedSearchFilters(){
    return (
      <form onSubmit={this.handleSubmit}>
        <Select
            name="brand-filter"
            options={this.getOptions("brand")}
            multi={true}
            onChange={this.logChange("brand")}
            value={ this.state.brand } />
          <button className='filter' onClick={this.handleSubmit("brand")}>Filter</button>
      </form>
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
          <div key={listing.id} className="listing">
            <h1>{listing.listing_title}
              <Rating defaultValue={listing.rating_average}
                className="star-rating"
                character={'✪'}
                disabled>
              </Rating>
            </h1>
            <li>Contact: {listing.lessor}</li>
            <li>Brand: {listing.brand}</li>
            <li>Category: {listing.category}</li>
            <li>Day Rate: ${listing.day_rate}</li>

            <li>Average Rating: {listing.rating_average}</li>
            <li>Review Count: {listing.review_count}</li>
          </div>
        );
      });
    }
    if (listings < 1) listings = ("No Results");
    return (
      <div className="listings">
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
        <div className="aside search-filters">
          { this.renderedSearchFilters() }
        </div>
        <div className="aside search-results">
          { this.renderedSearchResults() }
        </div>
        <div className="aside search-map">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </div>
    );
  }
}

export default Search;
