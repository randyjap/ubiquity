import { connect } from 'react-redux';

import UserListing from './user_listing';
import { fetchListings } from '../../actions/listing_actions';
import { clearSessionErrors }  from '../../actions/error_actions';

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
  fetchListing: (id) => dispatch(fetchListing(id)),
  bookListing: (rental) => dispatch(bookListing(rental)),
  clearSessionErrors: () => dispatch(clearSessionErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(UserListing);
