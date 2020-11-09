import React, { createElement } from 'react';
import ReactDOM from 'react-dom';
import BookCard from './BookCard';
import renderer from 'react-test-renderer';


describe('Search component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BookCard />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('renders the UI as expected', () => {
    const tree = renderer.create(<BookCard />).toJSON();
    expect(tree).toMatchSnapshot();
  });
})