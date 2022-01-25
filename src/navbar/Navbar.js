import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import logo from '../images/logo_gr.png';

const Navbar = ({ colors }) => {

  const [toggleMenu, setToggleMenu] = useState(false);
  const [largeur, setLargeur] = useState(window.innerWidth);

  const toggleNavSmallScreen = () => {
    setToggleMenu(!toggleMenu);
  }

  useEffect(() => {

    const changeWidth = () => {
      setLargeur(window.innerWidth);

      if(window.innerWidth > 768) {
        setToggleMenu(false);
      }
    }

    window.addEventListener('resize', changeWidth);

    return () => {
      window.removeEventListener('resize', changeWidth);
    }

  }, [])

  return (
    <Nav>
      <a href="/">
        <Logo color={colors.$text} src={logo} alt="logo" />
      </a>
      {(toggleMenu || largeur > 768) && (
        <MiddleNav color={colors.$background}>
          <NavItem color={colors.$text}>
            <a href='/'>Accueil</a>
          </NavItem>
          <NavItem color={colors.$text}>
            <a href='/shop'>Boutique</a>
          </NavItem>
          <NavItem color={colors.$text}>
            <a href='/contact'>Contacte</a>
          </NavItem>
        </MiddleNav>
      )}
      <Burger onClick={toggleNavSmallScreen}>
      {toggleMenu === false ? <i style={{color: colors.$text}} className="fas fa-bars burger"></i> : <i style={{color: colors.$text}} className="fas fa-times burger"></i>}
      </Burger>
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 3%;
  position: relative;
`

const Burger = styled.div`
  display: none;

  .burger {
    font-size: 30px;
    color: ${props => props.color};
  }

  @media (max-width: 768px) {
    display: block;
    position: relative;
    cursor: pointer;
  }
`

const MiddleNav = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;

  @media (max-width: 768px) {
    background: ${props => props.color};
    flex-direction: column;
    position: absolute;
    width: 100%;
    top: 100%;
    left: 0;
    z-index: 200;
    overflow: hidden;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px;
  }
`

const NavItem = styled.li`
  margin: 0 30px;

  a {
    font-weight: 600;
    color: ${props => props.color};
    font-size: 18px;
    position: relative;
    text-decoration: none;
    cursor: pointer;

    @media (max-width: 768px) {
      display: inline-block;
      padding: 30px;
    }

    &::after {
      content: '';
      background: ${props => props.color};
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
  filter: ${props => props.color !== '#000' && 'invert(1)'};
`

export default Navbar;