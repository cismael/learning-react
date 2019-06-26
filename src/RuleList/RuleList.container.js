import {connect} from 'react-redux';
import RuleList from './RuleList';

const mapStateToProps = ({rules}) => ({
    rules,
});

export default connect(
    mapStateToProps
)(RuleList);