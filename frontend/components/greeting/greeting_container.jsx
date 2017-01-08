import { connect } from 'react-redux';
import Greeting from './greeting';
import { signup, login, logout } from '../../actions/session_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  signup: (signUpData) => dispatch(signup(signUpData)),
  login: (loginData) => dispatch(login(loginData)),
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);
