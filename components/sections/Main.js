import React from 'react';
import { Container, Box, Heading, Text, Image, Button } from 'theme-ui';

export const Main = () => {
  return (
    <>
      <Container sx={styles.banner} id="Home">
        <Container sx={styles.banner.container}>
          <Box sx={styles.banner.contentBox}>
            <Heading as="h3" variant="heroPrimary">
              Be Emotional
            </Heading>
            <Text as="p" variant="heroSecondary">
              デザインで人の心を豊かにする
            </Text>
          </Box>
          <Box sx={styles.banner.imageBox}>
            <Image src="images/Be free.png" sx={styles.banner.image} />
          </Box>
        </Container>
      </Container>
    </>
  );
};

const styles = {
  cover: {
    width: '100%',
    backgroundSize: 'contain',
  },
  banner: {
    pt: ['140px', '145px', '155px', '170px', null, null, '180px', '215px'],
    pb: [2, null, 0, null, 2, 0, null, 5],
    position: 'relative',
    mb: 8,
    zIndex: 2,
    '&::before': {
      position: 'absolute',
      content: '""',
      bottom: '50%',

      right: '25%',
      height: '100%',
      width: '100%',
      zIndex: -1,
      backgroundImage: 'url(images/shapeLeftGreen.png)',
      backgroundRepeat: `no-repeat`,
      backgroundPosition: 'bottom left',
      backgroundSize: '60%',
    },
    '&::after': {
      position: 'absolute',
      content: '""',
      bottom: '40%',
      left: '20%',
      height: '100%',
      width: '100%',
      zIndex: -100,
      backgroundImage: 'url(images/shapeRightGreen2.png)',
      backgroundRepeat: `no-repeat`,
      backgroundPosition: 'bottom right',
      backgroundSize: '50%',
    },

    container: {
      minHeight: 'inherit',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    contentBox: {
      width: ['100%', '90%', '535px', null, '57%', '60%', '68%', '60%'],
      mx: 'auto',
      textAlign: 'center',
      mb: ['40px', null, null, null, null, 7],
      '&::before': {
        position: 'absolute',
        content: '""',
        top: '5%',

        left: '25%',
        height: '100%',
        width: '100%',
        zIndex: -1,
        backgroundImage: 'url(images/shapeLeftBlue.png)',
        backgroundRepeat: `no-repeat`,
        backgroundPosition: 'top left',
        backgroundSize: '10%',
      },
      '&::after': {
        position: 'absolute',
        content: '""',
        bottom: '40%',
        right: '20%',
        height: '100%',
        width: '100%',
        zIndex: -100,
        backgroundImage: 'url(images/shapeRightBlue.png)',
        backgroundRepeat: `no-repeat`,
        backgroundPosition: 'bottom right',
        backgroundSize: '30%',
      },
    },
    imageBox: {
      justifyContent: 'center',
      textAlign: 'center',
      display: 'inline-flex',
      mt: 3,
      mb: [0, null, -6, null, null, '-40px', null, -3],
      img: {
        position: 'relative',
        height: [245, 'auto'],
      },
      '&::before': {
        position: 'absolute',
        content: '""',
        bottom: '45%',

        left: '18%',
        height: '100%',
        width: '100%',
        zIndex: -1,
        backgroundImage: 'url(images/shapeLeftOrange.png)',
        backgroundRepeat: `no-repeat`,
        backgroundPosition: 'bottom left',
        backgroundSize: '30%',
      },
      '&::after': {
        position: 'absolute',
        content: '""',
        bottom: '80%',
        right: '30%',
        height: '100%',
        width: '100%',
        zIndex: -100,
        backgroundImage: 'url(images/shapeRightOrange.png)',
        backgroundRepeat: `no-repeat`,
        backgroundPosition: 'bottom right',
        backgroundSize: '10%',
      },
    },
    image: {
      mt: 10,
      backgroundSize: '50%',
      borderRadius: 20,
    },
  },
};
