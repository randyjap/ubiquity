import React from 'react';
import { Link } from 'react-router';
import { Rating, TextInput } from 'belle';

class RatingForm extends React.Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.logRating = this.logRating.bind(this);
    this.logReview = this.logReview.bind(this);
    this.state = { rental_id: this.props.id, errors: [] };
  }

  logRating(rating) {
    this.setState({ "review": rating.value });
  }

  logReview(review) {
    this.setState({ "review_text": review.target.value });
  }

  componentWillUnmount(){
    this.setState({errors: []});
  }

  renderErrors(){
    if (this.state.errors.length > 0) {
    return(
      <div className="listing-errors">
        <ul className="listing-errors">
          {this.state.errors.map((error, i) => (
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

  handleSubmit(){
    this.props.submitReview({review: this.state})
      .fail((errors) => this.setState({errors: errors.responseJSON}));
  }

  render(){
    return (
      <div>
        <Rating defaultValue={null}
          className="rating-filter"
          onUpdate={this.logRating}>
        </Rating>
        <TextInput style={{ minHeight: 80 }} onChange={this.logReview} placeholder="Enter your review here..." allowNewLine/>
        <button className="review" onClick={this.handleSubmit}>Submit Review!</button>
        { this.renderErrors() }
      </div>
    );
  }
}

export default RatingForm;
