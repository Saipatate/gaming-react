import React from 'react';
import styled from 'styled-components';
import logo from '../images/logo_gr.png';

const Navbar = () => {
  return (
    <Nav>
      <a href="/">
        <Logo src={logo} alt="logo" />
      </a>
      <MiddleNav>
        <NavItem>
          <a href='/'>Accueil</a>
        </NavItem>
        <NavItem>
          <a href='/shop'>Boutique</a>
        </NavItem>
        <NavItem>
          <a href='/contact'>Contacte</a>
        </NavItem>
      </MiddleNav>
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 3%;
`

const MiddleNav = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
`

const NavItem = styled.li`
  margin: 0 30px;

  a {
    font-weight: 600;
    color: #000;
    font-size: 18px;
    position: relative;
    text-decoration: none;
    cursor: pointer;

    &::after {
      content: '';
      background: #000;
      width: 0;
      height: 4px;
      left: 0;
      bottom: -5px;
      border-radius: 10px;
      position: absolute;
      transition: .4s;
    }

    &:hover::after {
      width: 50%;
      transition: .4s;
    }
  }
`

const Logo = styled.img`
  width: 90px;
`

export default Navbar;