import React, { useState, useEffect } from 'react';

// styled components
import { Button } from '../../globalStyles';

//icons
import { IconContext } from 'react-icons';
import { FaBars, FaShoppingCart, FaTimes } from 'react-icons/fa';

import {
    Nav,
    NavbarContainer,
    NavLogo,
    NavIcon,
    MobileIcon,
    NavMenu,
    NavItem,
    NavItemBtn,
    NavLinks,
    NavBtnLink 
    } from './Navbar.element';
import { Link, useLocation, useRouteMatch } from 'react-router-dom';
import usePrepareModalLink from '../ModalCollections/hooks/usePrepareModalLink';
import { MODAL_NAME } from '../ModalCollections/constants/modalName';
import { MODAL_TYPES } from '../ModalCollections/constants/modalTypes';

    
const Navbar = () => {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
        setButton(false);
        } else {
        setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    const signInLink = usePrepareModalLink({
      [MODAL_TYPES.popup]:MODAL_NAME.signin
    });

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to='/' onClick={closeMobileMenu}>
              <NavIcon />
              SHOPLY
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks to='/' onClick={closeMobileMenu}>
                  Products
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='#' onClick={closeMobileMenu}>
                  <FaShoppingCart>
                    Your Cart
                  </FaShoppingCart>
                </NavLinks>
              </NavItem>
              <NavItemBtn>
                {button ? (
                  <NavBtnLink to={signInLink}>
                    <Button primary>SIGN IN</Button>
                  </NavBtnLink>
                ) : (
                  <NavBtnLink to='#'>
                    <Button onClick={closeMobileMenu} fontBig primary>
                      SIGN IN
                    </Button>
                  </NavBtnLink>
                )}
              </NavItemBtn>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar
