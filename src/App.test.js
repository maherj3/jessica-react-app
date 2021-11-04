import React from "react";
import ReactDom from "react-dom";
import App, {label} from './App';
import {shallow} from "enzyme";

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDom.render(<App/>, div);
    ReactDom.unmountComponentAtNode(div)
    expect(1).toBe(1)
});

it('readers the heading', () => {
        const wrapper = shallow(<App/>);
        expect(wrapper.find('h1').text()).toBe('Hello REACT')
    }
)

it('readers the paragraph', () => {
        const wrapper = shallow(<App/>);
        const component = wrapper.find('p').at(1);
        expect(component.text()).toBe('Nice TDD')
    }
)

it('generate a label', () => {
     const l = label("42");
     expect(l).toBe('Hello 42')
    }
)