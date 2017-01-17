import { connect } from 'react-redux';
import Map from './map';
import { fetchSearchListings, receiveBounds } from '../../actions/search_actions';
import { searchListingsAsArray } from '../../reducers/selectors';

const mapStateToProps = state => ({
  searchListings: searchListingsAsArray(state.search),
  searchFilters: state.filters
});

const mapDispatchToProps = dispatch => ({
  fetchSearchListings: (filters) => dispatch(fetchSearchListings(filters)),
  receiveBounds: (filters) => dispatch(receiveBounds(filters))
});

export default connect(mapStateToProps, mapDispatchToProps)(Map);
