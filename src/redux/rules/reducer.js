import {RULES_LOADED} from './actions';

export default (state = [], action) => {
    switch(action.type) {
        case RULES_LOADED :
            return action.rules;

        default: return state;
    }
}