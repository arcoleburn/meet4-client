import React from 'react';
import ReactDom from 'react-dom';
import Register from '../Components/Registration'
import { BrowserRouter } from 'react-router-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDom.render(
    <BrowserRouter>
      <Register />
    </BrowserRouter>,
    div
  );
  ReactDom.unmountComponentAtNode(div);
});
