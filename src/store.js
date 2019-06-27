import {createStore, combineReducers} from 'redux';

import rulesReducer, { loadRules } from "./redux/rules";

const reducer = combineReducers({
    rules: rulesReducer,
});

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
