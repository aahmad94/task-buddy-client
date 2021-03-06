import { connect } from 'react-redux';
import { createNewUser } from '../../actions/session';
import Signup from './signup';


const mapStateToProps = (state) => ({
});



const mapDispatchToProps = (dispatch, ownProps) => ({
  createNewUser: formUser => dispatch(createNewUser(formUser))
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
