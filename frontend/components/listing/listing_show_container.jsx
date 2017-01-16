import { connect } from 'react-redux';

import ListingShow from './listing_show';
import { fetchListing, bookListing } from '../../actions/listing_actions';
import { clearSessionErrors }  from '../../actions/error_actions';

const mapStateToProps = state => ({
  listing: state.listing,
  errors: state.errors.all
});

const mapDispatchToProps = dispatch => ({
  fetchListing: (id) => dispatch(fetchListing(id)),
  bookListing: (rental) => dispatch(bookListing(rental)),
  clearSessionErrors: () => dispatch(clearSessionErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(ListingShow);
