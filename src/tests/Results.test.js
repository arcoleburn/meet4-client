import React from 'react';
import ReactDom from 'react-dom';
import Results from '../Components/Meet/Results'
import { BrowserRouter } from 'react-router-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDom.render(
    <BrowserRouter>
      <Results />
    </BrowserRouter>,
    div
  );
  ReactDom.unmountComponentAtNode(div);
});
