import { connect } from 'react-redux';
import Greeting from './nav';
import { signup, login, logout } from '../../actions/session_actions';
import { receiveCenter } from '../../actions/filter_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  map: state.filters.center.map
});

const mapDispatchToProps = dispatch => ({
  signup: (signUpData) => dispatch(signup(signUpData)),
  login: (loginData) => dispatch(login(loginData)),
  logout: () => dispatch(logout()),
  receiveCenter: (center) => dispatch(receiveCenter(center))
});

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);
