import { connect } from 'react-redux';
import Search from './search';
import { fetchSearchListings, fetchAllFilterOptions } from '../../actions/search_actions';

const mapStateToProps = state => ({
  searchListings: state.search.searchListings,
  searchFilters: state.search.searchFilters
});

const mapDispatchToProps = dispatch => ({
  fetchSearchListings: (filters) => dispatch(fetchSearchListings(filters)),
  fetchAllFilterOptions: () => dispatch(fetchAllFilterOptions())
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
