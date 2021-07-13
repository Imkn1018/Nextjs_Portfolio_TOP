import { Link } from 'react-scroll';

import { jsx, Box, Container, Image, Text, Heading } from 'theme-ui';
// import { Link } from 'components/link';
import data from '../../../data/footer_data.js';
// import FooterLogo from 'assets/logo.svg';
import {
  FaFacebookF,
  FaTwitter,
  FaGithubAlt,
  FaDribbble,
} from 'react-icons/fa';

const social = [
  {
    path: '/',
    icon: <FaFacebookF />,
  },
  {
    path: '/',
    icon: <FaTwitter />,
  },
  {
    path: '/',
    icon: <FaGithubAlt />,
  },
  {
    path: '/',
    icon: <FaDribbble />,
  },
];

export const Footer = () => {
  return (
    <Heading sx={styles.footer}>
      <Container>
        <Box sx={styles.footer.footerBottomArea}>
          <Text as="h4" pb={3} mb={5}>
            Kentaro Imai
          </Text>

          <Box sx={styles.menuFooter}>
            <Box sx={styles.social}>
              {social.map((socialItem, i) => (
                <Box as="span" key={i} sx={styles.social.icon}>
                  <Link to={socialItem.path}>{socialItem.icon}</Link>
                </Box>
              ))}
            </Box>
          </Box>
          <Text sx={styles.footer.copyright}>
            Copyright by {new Date().getFullYear()}
          </Text>
        </Box>
      </Container>
    </Heading>
  );
};

const styles = {
  footer: {
    footerBottomArea: {
      borderTop: '1px solid',
      borderTopColor: 'border_color',
      display: 'flex',
      pt: [7, null, 8],
      pb: ['40px', null, '100px'],
      textAlign: 'center',
      flexDirection: 'column',
    },
    menus: {
      mt: [3, 4],
      mb: 2,
      nav: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
      },
    },

    link: {
      fontSize: [1, '15px'],
      color: 'text',
      fontWeight: '400',
      mb: 2,
      cursor: 'pointer',
      transition: 'all 0.35s',
      display: 'block',
      textDecoration: 'none',
      lineHeight: [1.5, null, 1.8],
      px: [2, null, 4],
      ':hover': {
        color: 'primary',
      },
    },
    copyright: {
      fontSize: [1, '15px'],
      width: '100%',
    },
  },

  menuFooter: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    mt: 'auto',
  },

  social: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    mb: 5,
    icon: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'text',
      fontSize: 30,
      mr: '15px',
      transition: 'all 0.25s',
      cursor: 'pointer',
      ':last-child': {
        mr: '0',
      },
      '&:hover': {
        color: 'secondary',
      },
    },
  },
};
