import { connect } from 'react-redux';
import Footer from './footer';
import { receiveCenter } from '../../actions/filter_actions';

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
  receiveCenter: (center) => dispatch(receiveCenter(center))
});

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
