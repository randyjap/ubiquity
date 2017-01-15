import { connect } from 'react-redux';

import ListingShow from './listing_show';
import { selectListing } from '../../reducers/selectors';

const mapStateToProps = (state, { params }) => {
  const listingId = parseInt(params.listingId);
  // const listing = selectListing(state, listingId);
  return {
    listingId
    // listing
  };
};

const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListingShow);
