import { connect } from 'react-redux';

import UserRental from './user_rental';
import { fetchUserRentals } from '../../actions/current_user_actions';

const mapStateToProps = state => ({
  currentUserRentals: state.currentUserRentals
});

const mapDispatchToProps = dispatch => ({
  fetchUserRentals: () => dispatch(fetchUserRentals()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserRental);
