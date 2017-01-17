import { connect } from 'react-redux';
import Search from './search';
import { fetchSearchListings } from '../../actions/search_actions';
import { receiveFilters, resetFilters } from '../../actions/filter_actions';
import { fetchOptions } from '../../actions/option_actions';

const mapStateToProps = state => ({
  searchListings: state.search,
  searchFilters: state.filters,
  options: state.options
});

const mapDispatchToProps = dispatch => ({
  fetchSearchListings: (filters) => dispatch(fetchSearchListings(filters)),
  receiveFilters: (filters) => dispatch(receiveFilters(filters)),
  fetchOptions: () => dispatch(fetchOptions()),
  resetFilters: () => dispatch(resetFilters())
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
