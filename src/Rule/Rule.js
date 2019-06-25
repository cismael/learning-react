import React, {Component, Fragment } from 'react';
import ReactDOM from 'react-dom';

import './Rule.css'

import PropTypes from 'prop-types';

const Rule = ({title, description, likes, dislikes, tags}) => (
        <div className="panel panel-primary">
            <div className="panel-heading rule-title" role="presentation">
                {title}
                <i className="pull-right glyphicon glyphicon-chevron-down"></i>
            </div>
            <div className="panel-body">
                {description}
            </div>
            <div className="panel-footer">
                <div className="btn-toolbar">
                    {tags.map(tag => (
                        <span key={tag} className="badge">{tag}</span> 
                    ))} 
                <div className="btn-group btn-group-xs pull-right">
                    <a className="btn btn-primary" title="Update">
                        <i className="glyphicon glyphicon-pencil"></i>
                    </a>
                </div>
                <div className="btn-group btn-group-xs pull-right">
                    <a className="btn btn-default" title="+1">
                        {likes} <i className="glyphicon glyphicon-thumbs-up"></i>   
                    </a>
                    <a className="btn btn-default" title="-1">
                        {dislikes} <i className="glyphicon glyphicon-thumbs-down"></i>
                    </a>
                </div>
                </div>
            </div>
        </div>
)

Rule.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    likes: PropTypes.number,
    dislikes: PropTypes.number,
    tags: PropTypes.arrayOf(PropTypes.string),
};

export default Rule;
