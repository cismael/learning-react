import React, {Component} from 'react';

import PropTypes from 'prop-types';

import './Rule.css'

import LikeBtn from '../LikeBtn';

class Rule extends Component {
    state = {folded: !this.props.description};

    // Same as the line above
    // constructor(props) {
    //     super(props);
    //     this.state = {folded: false};
    // }

    toggleFolded = () => {
        this.setState({folded: !this.state.folded});
    }

    render() {
        const {id, title, description, likes, dislikes, tags} = this.props;
        const {folded} = this.state;
        return (
            <div className="panel panel-primary">
                <div className="panel-heading rule-title" role="presentation" onClick={this.toggleFolded}>
                    {title}
                    <i className={`pull-right glyphicon glyphicon-chevron-${this.state.folded ? 'down' : 'up'}`}></i>
                </div>
                {/* 
                    <div className="panel-body">
                        {description}
                    </div> 
                */}
                <div className={`panel-body ${this.state.folded ? 'hidden' : '' }`}>
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
                        <LikeBtn id={id} counter={likes} />
                        <LikeBtn id={id} counter={dislikes} type="down" />
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

Rule.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    likes: PropTypes.number,
    dislikes: PropTypes.number,
    tags: PropTypes.arrayOf(PropTypes.string),
};

export default Rule;
