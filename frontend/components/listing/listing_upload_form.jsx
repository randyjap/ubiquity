import React from 'react';
import Select from 'react-select';

class ListingUploadForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      image_urls: [],
      listing_title: "listing title",
      detail_desc: "detail desc",
      location: "hello",
      lat: 123,
      lng: 123,
      day_rate: 123,
      replacement_value: 123,
      serial: "123",
      brand: "Canon",
      category: "Video"
    };
    this.upload = this.upload.bind(this);
    this.getOptions = this.getOptions.bind(this);
    this.logChange = this.logChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
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
        this.props.postImage(images[0].url);
      }
    });
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

  handleSubmit(e) {
    e.preventDefault();
    this.props.createListing(this.state);
  }

  render(){
    return (
      <div className="main">
        <div className="aside-current-user-listings">
        </div>
        <div className="aside-current-user-listings">
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
          <TextInput value={this.state.listing_title} placeholder="Listing title..." />
          <TextInput value={this.state.detail_desc} placeholder="Listing description..." />
          <Input type="number" value={this.state.detail_desc} placeholder="Listing description..." />
          <button onClick={this.upload}>Upload Image</button><br/>
          <button onClick={this.handleSubmit}>Submit!</button>
        </div>
        <div className="aside-current-user-listings">
        </div>
      </div>
    );
  }
}

export default ListingUploadForm;
