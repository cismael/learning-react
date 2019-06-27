import {connect} from 'react-redux';
import RuleList from './RuleList';
import { loadRules } from '../redux/rules';

const mapStateToProps = ({rules}) => ({
    rules,
});

export default connect(
    mapStateToProps,
    // undefined : no need beacause it is the last param
)(RuleList);
