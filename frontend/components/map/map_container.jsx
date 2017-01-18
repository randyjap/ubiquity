import { connect } from 'react-redux';
import Map from './map';
import { fetchSearchListings } from '../../actions/search_actions';
import { searchListingsAsArray } from '../../reducers/selectors';
import { receiveBounds, receiveCenter } from '../../actions/filter_actions';

const mapStateToProps = state => ({
  searchListings: searchListingsAsArray(state.search),
  searchFilters: state.filters
});

const mapDispatchToProps = dispatch => ({
  fetchSearchListings: (filters) => dispatch(fetchSearchListings(filters)),
  receiveBounds: (filters) => dispatch(receiveBounds(filters)),
  receiveCenter: (center) => dispatch(receiveCenter(center))
});

export default connect(mapStateToProps, mapDispatchToProps)(Map);
