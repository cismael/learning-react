import React from 'react';
import ReactDOM from 'react-dom';

import TestUtils from 'react-dom/test-utils';
import ShallowRenderer from 'react-test-renderer/shallow';

import Rule from './Rule';

const testRule = {
    "id": 1,
    "title": "If you don't have a mobile website, you don't have a website.",
    "description": "In 2014, 50% of worldwide traffic uses mobile. A website must adapt the content for mobile.",
    "likes": 0,
    "dislikes": 0,
    "tags": ["ui"]
}

describe('Rule', () => {
    it('should render correctly with DOM rendering', () => {
        const element = <Rule {...testRule}/>;
        const component = TestUtils.renderIntoDocument(element);
        const titleNode = TestUtils.findRenderedDOMComponentWithClass(component, 'panel-heading');
        const domNode = ReactDOM.findDOMNode(titleNode);

        expect(domNode.textContent).toEqual(testRule.title);
    });

    it('should render correctly with shallow rendering', () => {
        const shallowRenderer = new ShallowRenderer();

        const element = <Rule {...testRule}/>;
        shallowRenderer.render(element);
        
        const component = shallowRenderer.getRenderOutput();
        
        expect(component.props.className).toEqual('panel panel-primary');    

        const {children} = component.props;
        expect(children.length).toBe(3);

        const [panelHeader, panelBody, panelFooter] = children;
        expect(panelHeader.props.className).toContain('panel-heading');
    });
})