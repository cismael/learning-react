import React, {useEffect} from 'react';

import {Route} from 'react-router-dom';

import Header from './Header';

import RuleList from '../RuleList';

import RuleForm from './RuleForm'

const Layout = ({onLoad}) => {
    useEffect(() => {
        onLoad()
    }, []);

    return (
        <>
            <Header />
            <div className="container-fluid">
                <div className="container" >
                    <Route exact path='/' component={RuleList} />
                    <Route exact path='/edit' component={RuleForm} />
                    <Route path='/edit/:id' component={RuleForm} />
                </div>
            </div>
        </>
    )
}

export default Layout
