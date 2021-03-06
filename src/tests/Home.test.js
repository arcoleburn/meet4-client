import React from 'react';
import ReactDom from 'react-dom';
import Home from '../Components/Home'
import { BrowserRouter } from 'react-router-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDom.render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>,
    div
  );
  ReactDom.unmountComponentAtNode(div);
});
