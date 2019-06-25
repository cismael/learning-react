import React, {Component, Fragment } from 'react';
import ReactDOM from 'react-dom';

import Rule from '../Rule/Rule'

import PropTypes from 'prop-types';

export class RuleList extends React.Component {
    static protoTypes = {
        rules: PropTypes.arrayOf (
            PropTypes.shape({
                id: PropTypes.number.isRequired,
                title: PropTypes.string,
                description: PropTypes.string,
                likes: PropTypes.number,
                dislikes: PropTypes.number,
                tags: PropTypes.arrayOf(PropTypes.string),
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

export default RuleList

RuleList.defaultProps = {
    rules: [],
};