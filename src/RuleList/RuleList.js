import React, {Component, Fragment } from 'react';

import Rule from '../Rule/Rule'

import PropTypes from 'prop-types';

export class RuleList extends Component {
    static protoTypes = {
        rules: PropTypes.arrayOf (
            PropTypes.shape({
                id: PropTypes.number.isRequired,
            }),
        ),
        onLoad: PropTypes.func.isRequired,
    };

    render(){
        const {rules} = this.props;
        return (            
            <Fragment>
                {rules.map(rule => <Rule key={rule.id} {...rule} />)}
            </Fragment>
        )
    }

    componentDidMount() {
        this.props.onLoad();
    }
}

RuleList.defaultProps = {
    rules: [],
};

export default RuleList
