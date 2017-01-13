import { connect } from 'react-redux';
import Search from './search';
import { fetchSearchListings } from '../../actions/search_actions';

const mapStateToProps = state => ({
  searchListings: state.search.searchListings
});

const mapDispatchToProps = dispatch => ({
  fetchSearchListings: () => dispatch(fetchSearchListings())
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
