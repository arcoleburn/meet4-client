import React from 'react';
import ReactDom from 'react-dom';
import Locations from '../Components/Locations'
import { BrowserRouter } from 'react-router-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDom.render(
    <BrowserRouter>
      <Locations />
    </BrowserRouter>,
    div
  );
  ReactDom.unmountComponentAtNode(div);
});
