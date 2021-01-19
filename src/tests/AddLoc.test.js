import React from 'react';
import ReactDom from 'react-dom';
import AddLoc from '../Components/Locations/AddLocation'
import { BrowserRouter } from 'react-router-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDom.render(
    <BrowserRouter>
      <AddLoc />
    </BrowserRouter>,
    div
  );
  ReactDom.unmountComponentAtNode(div);
});
