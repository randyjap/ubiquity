import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signup, login, logout } from '../../actions/session_actions';
import { clearSessionErrors }  from '../../actions/error_actions';

const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.currentUser),
  errors: state.errors.all
});

const mapDispatchToProps = (dispatch, { location }) => {
  const formType = location.pathname.slice(1);
  const processForm = (formType === 'login') ? login : signup;

  return {
    processForm: user => dispatch(processForm(user)),
    login: user => dispatch(login(user)),
    formType,
    clearSessionErrors: () => dispatch(clearSessionErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
