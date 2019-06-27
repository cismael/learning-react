import {connect} from 'react-redux';
import RuleList from './RuleList';
import { loadRules } from '../redux/rules';

const mapStateToProps = ({rules}) => ({
    rules,
});

const mapDispatchToProps = dispatch => ({
    onLoad: () => dispatch(loadRules()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RuleList);
