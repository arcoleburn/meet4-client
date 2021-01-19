import React from 'react';
import ReactDom from 'react-dom';
import FriendsPage from '../Components/FriendsPage'
import { BrowserRouter } from 'react-router-dom';

it.skip('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDom.render(
    <BrowserRouter>
      <FriendsPage />
    </BrowserRouter>,
    div
  );
  ReactDom.unmountComponentAtNode(div);
});
