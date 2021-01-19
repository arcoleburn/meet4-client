import React from 'react';
import ReactDom from 'react-dom';
import Map from '../Components/Meet/Map'
import { BrowserRouter } from 'react-router-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDom.render(
    <BrowserRouter>
      <Map business={{location:{display_address:['random','place']}}} />
    </BrowserRouter>,
    div
  );
  ReactDom.unmountComponentAtNode(div);
});
