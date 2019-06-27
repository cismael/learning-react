import React, {Component} from 'react';

import PropTypes from 'prop-types';

export class LikeBtn extends Component {
    static protoTypes = {
        counter: PropTypes.number.isRequired,
        type: PropTypes.oneOf(["up", "down"]),
        onClick: PropTypes.func.isRequired,
    };

    // componentDidMount() {
    //     this.timer = setInterval(
    //         () => {this.setState({counter: this.state.counter + 10})},
    //         10000
    //     );
    // }
    
    // componentWillUnmount() {
    //     clearInterval(this.timer)
    // } 

    // incrementCounter = () => {
    //     this.setState({counter: this.state.counter + 1});
    // }

    render(){
        const {type, onClick, counter} = this.props;
        const isUp = type === "up";

        return (         
                <a 
                    className="btn btn-default" 
                    title={`${isUp ? "+" : "-"}1`} 
                    onClick={onClick}
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