import React from 'react';
import ReactDOM from 'react-dom';

import TestUtils from 'react-dom/test-utils';
// import ShallowRenderer from 'react-test-renderer/shallow';

import LikeBtn from './LikeBtn';

describe('LikeBtn', () => {
    it('should increment counter', () => {
        const element = <LikeBtn initialCounter={0} />;
        const instance = TestUtils.renderIntoDocument(element);
        const component = TestUtils.findRenderedDOMComponentWithClass(instance, 'btn');
        const domNode = ReactDOM.findDOMNode(component);
        console.log(domNode);

        expect(domNode.textContent).toContain(0);

        TestUtils.Simulate.click(domNode);        

        expect(domNode.textContent).toContain(1);
    });
})