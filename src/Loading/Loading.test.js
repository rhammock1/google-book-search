import React, { createElement } from 'react';
import ReactDOM from 'react-dom';
import Loading from './Loading';



describe('Loading component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Loading />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
 
})