import { connect } from 'react-redux';

import ListingUploadForm from './listing_upload_form';
import { createListing } from '../../actions/listing_actions';
import { clearSessionErrors }  from '../../actions/error_actions';
import { fetchOptions } from '../../actions/option_actions';


const mapStateToProps = state => ({
  errors: state.errors.all,
  options: state.options
});

const mapDispatchToProps = dispatch => ({
  createListing: (listing) => dispatch(createListing(listing)),
  clearSessionErrors: () => dispatch(clearSessionErrors()),
  fetchOptions: () => dispatch(fetchOptions())
});

export default connect(mapStateToProps, mapDispatchToProps)(ListingUploadForm);
