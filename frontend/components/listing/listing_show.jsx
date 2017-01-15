import React from 'react';
import { Link } from 'react-router';

class ListingDetail extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="main">
        <Link to='search'>Click here to search more</Link><br/>
        Hello! You are on page {this.props.listingId}
      </div>
    );
  }
}

export default ListingDetail;
