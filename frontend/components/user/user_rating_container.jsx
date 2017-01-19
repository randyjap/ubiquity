import { connect } from 'react-redux';

import UserListing from './user_listing';
import { fetchUserListings, toggleListingActivity } from '../../actions/current_user_actions';

const mapStateToProps = state => ({
  userProfile: state.currentUserListings
});

const mapDispatchToProps = dispatch => ({
  toggleListingActivity: (id) => dispatch(toggleListingActivity(id)),
  fetchUserListings: () => dispatch(fetchUserListings())
});

export default connect(mapStateToProps, mapDispatchToProps)(UserListing);
