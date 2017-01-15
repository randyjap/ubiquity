import { connect } from 'react-redux';

import ListingShow from './listing_show';
import { fetchListing } from '../../actions/listing_actions';

const mapStateToProps = state => ({
  listing: state.listing
});

const mapDispatchToProps = dispatch => ({
  fetchListing: (id) => dispatch(fetchListing(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ListingShow);
