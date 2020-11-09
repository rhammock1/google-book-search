import React, { createElement } from 'react';
import ReactDOM from 'react-dom';
import Filter from './Filter';
import renderer from 'react-test-renderer';


describe('Search component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Filter />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('renders the UI as expected', () => {
    const tree = renderer.create(<Filter />).toJSON();
    expect(tree).toMatchSnapshot();
  });
})