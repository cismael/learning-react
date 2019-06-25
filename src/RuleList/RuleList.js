import React, {Fragment } from 'react';

import Rule from '../Rule/Rule'

import PropTypes from 'prop-types';

export class RuleList extends React.Component {
    static protoTypes = {
        rules: PropTypes.arrayOf (
            PropTypes.shape({
                id: PropTypes.number.isRequired,
            }),
        ),
    };

    render(){
        console.log(this.props.rules.toto)

        const {rules} = this.props;
        return (            
            <Fragment>
                {rules.map(rule => <Rule key={rule.id} {...rule} />)}
            </Fragment>
        )
    }
}

RuleList.defaultProps = {
    rules: [],
};

export default RuleList
