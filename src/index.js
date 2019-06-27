import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
// import App from './App';
import RuleList from './RuleList';

import {Provider} from 'react-redux';

import {BrowserRouter, Route} from 'react-router-dom';

import * as serviceWorker from './serviceWorker';

import store from './store';

// const domElement = document.getElementById('root');
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Route path='/' component={RuleList} />
        </BrowserRouter>
    </Provider>, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
