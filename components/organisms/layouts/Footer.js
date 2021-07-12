import { jsx, Box, Container, Image, Text,Heading } from 'theme-ui';
// import { Link } from 'components/link';
import data from '../../../data/footer_data.js';
// import FooterLogo from 'assets/logo.svg';

export const Footer = () => {
  return (
    <Heading sx={styles.footer}>
      <Container>
        <Box sx={styles.footer.footerBottomArea}>
          {/* <Link path="/">
            {/* <Image src={FooterLogo} alt="logo" /> */}
          {/* </Link> */} */}
          {/* <Box sx={styles.footer.menus}>
            <nav>
              {data.menuItem.map((item, i) => (
                <Link
                  path={item.path}
                  key={i}
                  label={item.label}
                  sx={styles.footer.link}
                />
              ))}
            </nav>
          </Box> */}
          <Text sx={styles.footer.copyright}>
            Copyright by {new Date().getFullYear()}
          </Text>
        </Box>
      </Container>
    </Heading>
  );
}

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
};
