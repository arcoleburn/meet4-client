import React from 'react';
import ReactDom from 'react-dom';
import Header from '../Components/Header'
import { BrowserRouter } from 'react-router-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDom.render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>,
    div
  );
  ReactDom.unmountComponentAtNode(div);
});
