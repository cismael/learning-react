import {RULES_LOADED, DO_LIKE, DO_DISLIKE} from './actions';

import findIndex from 'lodash/findIndex';

import {add} from 'immutadot';

export default (state = [], action) => {
    switch(action.type) {
        case RULES_LOADED :
            return action.rules;
        case DO_LIKE : {
            // equivalent down
            // const index = findIndex(state, {id: action.ruleId})
            const index = findIndex(state, (rule) => rule.id === action.ruleId);
            const newRule = {
                ...state[index],
                likes: state[index].likes + 1,
            };
            const newRules = [...state];
            newRules[index] = newRule;
            return newRules;
        }
        case DO_DISLIKE : {
            const index = findIndex(state, (rule) => rule.id === action.ruleId);
            return add(state, `[${index}].dislikes`, 1);
        }
        default: 
            return state;
    }
}
