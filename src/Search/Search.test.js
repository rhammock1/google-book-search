import React, { createElement } from 'react';
import ReactDOM from 'react-dom';
import Search from './Search';
import renderer from 'react-test-renderer';


describe('Search component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Search />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('renders the UI as expected', () => {
    const tree = renderer.create(<Search />).toJSON();
    expect(tree).toMatchSnapshot();
  });
})