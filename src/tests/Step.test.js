import React from 'react';
import ReactDom from 'react-dom';
import {Step} from '../Components/Meet/Map/Steps'
import { BrowserRouter } from 'react-router-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDom.render(
    <BrowserRouter>
      <Step stepData={{}}/>
    </BrowserRouter>,
    div
  );
  ReactDom.unmountComponentAtNode(div);
});
