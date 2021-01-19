import React from 'react';
import ReactDom from 'react-dom';
import Meet from '../Components/Meet'
import { BrowserRouter } from 'react-router-dom';

it.skip('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDom.render(
    <BrowserRouter>
      <Meet />
    </BrowserRouter>,
    div
  );
  ReactDom.unmountComponentAtNode(div);
});
