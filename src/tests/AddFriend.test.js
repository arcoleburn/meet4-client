import React from 'react';
import ReactDom from 'react-dom';
import AddFriend from '../Components/FriendsPage/addFriend'
import { BrowserRouter } from 'react-router-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDom.render(
    <BrowserRouter>
      <AddFriend />
    </BrowserRouter>,
    div
  );
  ReactDom.unmountComponentAtNode(div);
});
