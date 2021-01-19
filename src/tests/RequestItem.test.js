import React from 'react';
import ReactDom from 'react-dom';
import Item from '../Components/FriendsPage/FriendRequests/requestItem'
import { BrowserRouter } from 'react-router-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDom.render(
    <BrowserRouter>
      <Item data={{}}/>
    </BrowserRouter>,
    div
  );
  ReactDom.unmountComponentAtNode(div);
});
