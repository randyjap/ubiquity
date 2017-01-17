import React from 'react';
import { Link } from 'react-router';
import { Spinner, Rating, DatePicker } from 'belle';
import FontAwesome from 'react-fontawesome';

class UserListing extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
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
    let listings;

    return (
      <div className="aside">{ listings }</div>
    );
  }

  render(){
    return (
      <div className="main">
        <div className="aside aside-3"> </div>
        { this.renderListings() }
        <div className="aside aside-3"> </div>
      </div>
    );
  }
}

export default UserListing;
