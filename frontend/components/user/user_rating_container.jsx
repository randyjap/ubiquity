import { connect } from 'react-redux';

import UserRating from './user_rating';
import { fetchUserProfile } from '../../actions/current_user_actions';

const mapStateToProps = state => ({
  userProfile: state.userProfile
});

const mapDispatchToProps = dispatch => ({
  fetchUserProfile: () => dispatch(fetchUserProfile())
});

export default connect(mapStateToProps, mapDispatchToProps)(UserRating);
