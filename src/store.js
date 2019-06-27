import {createStore, combineReducers, applyMiddleware} from 'redux';

import rulesReducer from "./redux/rules";

import thunkMiddleware from 'redux-thunk';

import {composeWithDevTools} from 'redux-devtools-extension';

const reducer = combineReducers({
    rules: rulesReducer,
});

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunkMiddleware),
        // other store enhancers if any
    )
    
);

export default store;
