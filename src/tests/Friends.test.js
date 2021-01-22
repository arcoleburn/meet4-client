import React from 'react';
import ReactDom from 'react-dom';
import FriendsPage from '../Components/FriendsPage'
import { BrowserRouter } from 'react-router-dom';
describe('meet', () =>{
  beforeEach(() => {
    Object.defineProperty(window, "localStorage", {
      value: {
        getItem: jest.fn(() => 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI4ZjA1ZGI4MC1kMjhjLTRjNzQtYTAxZS1iNTVjMTk5ZTM4NDUiLCJ1c2VybmFtZSI6IlRpbVJlYWxHdXkiLCJpYXQiOjE2MTExMDUzMTMsInN1YiI6IlRpbVJlYWxHdXkifQ.xVF4hv8snwBo6bL5qVEyBiqoYB9rWBAliYnO5NaAcl4'),
        setItem: jest.fn(() => null)
      },
      writable: true
    });
  });
  
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDom.render(
      <BrowserRouter>
        <FriendsPage />
      </BrowserRouter>,
      div
    );
    ReactDom.unmountComponentAtNode(div);
  });
  
  })