import React from 'react';
import Select from 'react-select';
import { TextInput } from 'belle';

class ListingUploadForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      image_urls: [],
      listing_title: "",
      detail_desc: "",
      location: "",
      lat: "",
      lng: "",
      day_rate: "",
      replacement_value: "",
      serial: "",
      brand: "",
      category: ""
    };
    this.upload = this.upload.bind(this);
    this.getOptions = this.getOptions.bind(this);
    this.logChange = this.logChange.bind(this);
    this.logChangeInput = this.logChangeInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.initAutocomplete = this.initAutocomplete.bind(this);
    this.updateLocation = this.updateLocation.bind(this);
    this.redirect = this.redirect.bind(this);
  }

  componentDidMount(){
    this.initAutocomplete();
    this.props.fetchOptions();
  }

  componentWillUnmount(){
    this.props.clearSessionErrors();
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

  upload(e){
    e.preventDefault();
    window.cloudinary.openUploadWidget(window.CLOUDINARY_OPTIONS, function(error, images) {
      if (error === null) {
        this.setState({ image_urls: images.map(image => image.url) });
      }
    }.bind(this));
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

  logChange(field) {
    return e => {
      this.setState({ [field]: e.value });
    };
  }

  logChangeInput(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }

  initAutocomplete() {
    let autocomplete = new google.maps.places.Autocomplete(
        /** @type {!HTMLInputElement} */(document.getElementById('autocomplete-2')),
        {types: ['geocode']});
    autocomplete.addListener('place_changed', this.updateLocation);
    this.autocomplete = autocomplete;
  }

  updateLocation() {
    if (this.autocomplete.getPlace().geometry === undefined) return null;
    let lat = this.autocomplete.getPlace().geometry.location.lat();
    let lng = this.autocomplete.getPlace().geometry.location.lng();
    let searchAddress = this.autocomplete.getPlace().formatted_address;
    let latlng = {
      lat: lat,
      lng: lng
    };
    this.setState({ lat: lat, lng: lng, location: searchAddress });
  }

  redirect(route){
    this.props.router.replace(route);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createListing(this.state)
      .then(listing => {
        this.redirect(`listings/${listing.id}`);
        return listing;
      })
      .then(listing => console.log(listing));
  }

  render(){
    return (
      <div className="main">
        <div className="create-listing-form">
          { this.renderErrors() }
          <Select
            name="brand-filter"
            options={this.getOptions("brand_options")}
            onChange={this.logChange("brand")}
            value={this.state.brand}
            placeholder="Select brands.." /><br/>
          <Select
            name="category-filter"
            options={this.getOptions("category_options")}
            onChange={this.logChange("category")}
            value={this.state.category}
            placeholder="Select categories.." />
          <TextInput value={this.state.listing_title} placeholder="Listing title..." onChange={this.logChangeInput("listing_title")}/>
          <br/><TextInput value={this.state.detail_desc} placeholder="Listing description..." onChange={this.logChangeInput("detail_desc")}/>
          <br/><TextInput value={this.state.serial} placeholder="Equipment serial number..." onChange={this.logChangeInput("serial")}/>
          <br/><input id="autocomplete-2" className="create-listing" value={this.state.location} onChange={this.logChange("location")} placeholder="Enter a location..."/>
          <br/><input type="number" className="create-listing" value={this.state.day_rate} placeholder="Day Rate..." onChange={this.logChangeInput("day_rate")}/>
          <br/><input type="number" className="create-listing" value={this.state.replacement_value} placeholder="Replacement Value..." onChange={this.logChangeInput("replacement_value")}/>
          <br/><button className="create-listing" onClick={this.upload}>Upload Image(s)</button><button className="create-listing" onClick={this.handleSubmit}>Submit!</button>
        </div>
      </div>
    );
  }
}

export default ListingUploadForm;
