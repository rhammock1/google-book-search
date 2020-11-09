import React, { createElement } from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import renderer from 'react-test-renderer';


describe('Header component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Header />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('renders the UI as expected', () => {
    const tree = renderer.create(<Card title='randomTitle' content='filler content' />).toJSON();
    expect(tree).toMatchSnapshot();
  });
})