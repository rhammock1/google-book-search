import React, { createElement } from 'react';
import ReactDOM from 'react-dom';
import BookList from './BookList';
import renderer from 'react-test-renderer';


describe('Search component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BookList />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('renders the UI as expected', () => {
    const tree = renderer.create(<BookList />).toJSON();
    expect(tree).toMatchSnapshot();
  });
})