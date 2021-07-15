import React from 'react';

import { jsx, Container, Flex, Button, Heading, Image } from 'theme-ui';
import { keyframes } from '@emotion/react';
import { Link } from 'react-scroll';
import MobileDrawer from './MobileDrawer';

import menuItems from '../../../data/header_data';

export const Header = ({ className }) => {
  return (
    <Heading sx={styles.header} className={className} id="header">
      <Container sx={styles.container}>
        <Image src="images/headerLogo.png" sx={styles.headerLogo} />
        <Flex as="nav" sx={styles.nav}>
          {menuItems.map((menuItem, i) => (
            <Link
              activeClass="active"
              to={menuItem.path}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              key={i}
            >
              {menuItem.label}
            </Link>
          ))}
        </Flex>
        {/* <Button
          className="donate_btn"
          variant="secondary"
          aria-label="donate_btn"
        >
          Get Started
        </Button> */}
        <MobileDrawer />
      </Container>
    </Heading>
  );
};

//　ヘッダーの動き
const positionAnim = keyframes`
  from {
    position: fixed;
    opacity: 1;
  }

  to {
    position: absolute;
    opacity: 1;
    transition: all 0.4s ease;
  }
`;

const styles = {
  headerLogo: {
    height: '80px',
    width: '200px',
  },
  header: {
    color: 'text',
    fontWeight: 'body',
    py: 5,
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'transparent',
    transition: 'all 0.4s ease',
    animation: `${positionAnim} 0.4s ease`,
    '.donate__btn': {
      flexShrink: 0,
      mr: [15, 20, null, null, 0],
      ml: ['auto', null, null, null, 0],
    },
    '&.sticky': {
      position: 'fixed',
      backgroundColor: 'background',
      color: '#000000',
      boxShadow: '0 1px 2px rgba(0, 0, 0, 0.06)',
      py: 3,
      'nev > a': {
        color: 'text',
      },
    },
  },

  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  nav: {
    mx: 'auto',
    '@media screen and (max-width: 1024px)': {
      display: 'none',
    },
    '@media screen and (min-width: 1024px)': {
      display: 'block',
    },
    a: {
      fontSize: 6,
      fontWeight: 'body',
      px: 5,
      cursor: 'pointer',
      lineHeight: '1.2',
      transition: 'all 0.15s',
      '&:hover': {
        color: 'primary',
      },
      '&.active': {
        color: 'primary',
      },
    },
  },
};
