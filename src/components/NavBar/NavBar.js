import React from 'react';
import { MdHome, MdList, MdAccountCircle } from 'react-icons/md';
import { Nav, Link } from './styles';

const fontSize = '32px';

export const NavBar = () => {
  return (
    <Nav>
      <Link to="/">
        <MdHome size={fontSize} />
      </Link>
      <Link to="/categories">
        <MdList size={fontSize} />
      </Link>
      <Link to="/login">
        <MdAccountCircle size={fontSize} />
      </Link>
    </Nav>
  )
}