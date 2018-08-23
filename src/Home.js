import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { HELLO_PATH, COOKIES_PATH, FORM_PATH } from './routes/paths';

const NavLink = styled(Link)`
  margin-right: 1rem;
  color: #1368b3;
  display: inline-block;
  text-decoration: none;

  :hover {
    text-decoration: underline;
  }
`;

const Pages = () => (
  <div>
    <h1>Examples</h1>
    <ul>
      <li><NavLink to={HELLO_PATH}>Hello!</NavLink></li>
      <li><NavLink to={COOKIES_PATH}>Cookie Counter</NavLink></li>
      <li><NavLink to={FORM_PATH}>Form Example</NavLink></li>
    </ul>
  </div>
);

export default Pages;
