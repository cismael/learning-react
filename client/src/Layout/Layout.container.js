import {connect} from 'react-redux';
import Layout from './Layout';
import { loadRules } from '../redux/rules';

const mapDispatchToProps = dispatch => ({
    onLoad: () => dispatch(loadRules()),
});

export default connect(
    undefined,
    mapDispatchToProps
)(Layout);
