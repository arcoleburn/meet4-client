import React from 'react';
import ReactDom from 'react-dom';
import FriendSummaryExp from '../Components/FriendsPage/FriendSummaryExp'
import { BrowserRouter } from 'react-router-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDom.render(
    <BrowserRouter>
      <FriendSummaryExp friendData={{}}/>
    </BrowserRouter>,
    div
  );
  ReactDom.unmountComponentAtNode(div);
});
