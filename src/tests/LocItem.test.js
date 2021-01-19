import React from 'react';
import ReactDom from 'react-dom';
import LocItem from '../Components/Locations/LocationItem'
import { BrowserRouter } from 'react-router-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDom.render(
    <BrowserRouter>
      <LocItem data={{}} />
    </BrowserRouter>,
    div
  );
  ReactDom.unmountComponentAtNode(div);
});
