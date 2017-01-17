import { connect } from 'react-redux';
import Search from './search';
import { fetchSearchListings, fetchAllFilterOptions, receiveFilters } from '../../actions/search_actions';

const mapStateToProps = state => ({
  searchListings: state.search.searchListings,
  searchFilters: state.search.searchFilters
});

const mapDispatchToProps = dispatch => ({
  fetchSearchListings: (filters) => dispatch(fetchSearchListings(filters)),
  fetchAllFilterOptions: () => dispatch(fetchAllFilterOptions()),
  receiveFilters: (filters) => dispatch(receiveFilters(filters))
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
