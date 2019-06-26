import React, {Component} from 'react';

import PropTypes from 'prop-types';

export class LikeBtn extends Component {
    state = {counter: this.props.initialCounter};

    static protoTypes = {
        initialCounter: PropTypes.number.isRequired,
        type: PropTypes.oneOf(["up", "down"]),
    };

    incrementCounter = () => {
        this.setState({counter: this.state.counter + 1});
    }

    render(){
        const {type} = this.props;
        const {counter} = this.state;
        const isUp = type === "up";

        return (         
                <a 
                    className="btn btn-default" 
                    title={`${isUp ? "+" : "-"}1`} 
                    onClick={this.incrementCounter}
                >
                    {counter} &nbsp;
                    <i className={`glyphicon glyphicon-thumbs-${isUp ? "up" : "down"}`}></i>   
                </a>
        )
    }
    
}

LikeBtn.defaultProps = {
    type: "up",
};

export default LikeBtn;