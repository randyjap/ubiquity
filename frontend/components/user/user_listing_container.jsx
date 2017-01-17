import { connect } from 'react-redux';

import UserListing from './user_listing';
import { fetchUserListings, toggleListingActivity } from '../../actions/user_listing_actions';

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
  toggleListingActivity: (id) => dispatch(toggleListingActivity(id)),
  fetchUserListings: () => dispatch(fetchUserListings())
});

export default connect(mapStateToProps, mapDispatchToProps)(UserListing);
