import { connect } from 'react-redux';
import Map from './map';
import { fetchSearchListings } from '../../actions/search_actions';
import { searchListingsAsArray } from '../../reducers/selectors';

const mapStateToProps = state => ({
  searchListings: searchListingsAsArray(state.search.searchListings)
});

const mapDispatchToProps = dispatch => ({
  fetchSearchListings: (filters) => dispatch(fetchSearchListings(filters))
});

export default connect(mapStateToProps, mapDispatchToProps)(Map);
