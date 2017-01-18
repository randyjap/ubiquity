import { connect } from 'react-redux';

import UserRental from './user_rental';
import { fetchUserRentals, submitReview } from '../../actions/current_user_actions';
import { clearSessionErrors }  from '../../actions/error_actions';

const mapStateToProps = state => ({
  currentUserRentals: state.currentUserRentals
});

const mapDispatchToProps = dispatch => ({
  fetchUserRentals: () => dispatch(fetchUserRentals()),
  submitReview: (review) => dispatch(submitReview(review))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserRental);
