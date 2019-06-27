import {connect} from 'react-redux';
import RuleForm from './RuleForm';

import find from 'lodash/find';

const mapStateToProps = (state, ownProps) => {
    const ruleId = ownProps.match.params.id;    
    // const rule = find(state.rules, (rule) => rule.id === Number(ruleId));
    // same as the one above
    const rule = find(state.rules, { id: Number(ruleId) });

    return { 
        rule,
    };
};

export default connect(    
    mapStateToProps,
    undefined,
)(RuleForm);
