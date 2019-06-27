import {connect} from 'react-redux';
import LikeBtn from './LikeBtn';
import { doLike, doDislike } from '../redux/rules';

// const mapStateToProps = ({rules}) => ({
//     rules,
// });

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => {
        if(ownProps.type === 'down') {
            dispatch(doDislike(ownProps.id));
        } else {
            dispatch(doLike(ownProps.id));
        }
    }
});

export default connect(
    undefined,
    mapDispatchToProps
)(LikeBtn);