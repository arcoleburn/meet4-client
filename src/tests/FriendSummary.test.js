import React from 'react';
import ReactDom from 'react-dom';
import FriendSummary from '../Components/FriendsPage/FriendSummary'
import { BrowserRouter } from 'react-router-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDom.render(
    <BrowserRouter>
      <FriendSummary friendData={{}} />
    </BrowserRouter>,
    div
  );
  ReactDom.unmountComponentAtNode(div);
});
