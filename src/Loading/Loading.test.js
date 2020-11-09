import React, { createElement } from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Loading from './Loading';



describe('Loading component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Loading />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('renders the UI as expected', () => {
    const tree = renderer.create(<Loading />).toJSON();
    expect(tree).toMatchSnapshot();
  });
})