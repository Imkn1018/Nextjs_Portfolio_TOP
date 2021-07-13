import React from 'react';
import { Container, Box, Heading, Text, Image, Button } from 'theme-ui';
import data from '../../data/works_data.js';

export const Works = () => {
  return (
    <Container sx={styles.banner} id="Works">
      <Container sx={styles.banner.container}>
        <Text as="h1" pb={5} mb={3}>
          My Works
        </Text>
        <Box sx={styles.wrapper}>
          {data.map((item) => (
            <Box sx={styles.banner.contentBox}>
              <Image src={item.image} />
              <Text as="h2" pt={3} pl={3} textAlign="left">
                {item.title}
              </Text>
              <Text as="h4" py={1} px={3}>
                {item.description}
              </Text>
              <Box sx={styles.banner.contentBox.endText}>
                <Box></Box>
                <Text as="p" pt={3}>
                  {item.createdDate}
                </Text>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Container>
  );
};

const styles = {
  banner: {
    // pt: ['140px', '145px', '155px', '170px', null, null, '180px', '215px'],
    pb: [2, null, 0, null, 2, 0, null, 5],
    position: 'relative',
    zIndex: 2,
    '&::before': {
      position: 'absolute',
      content: '""',
      bottom: '20%',
      right: '20%',
      height: '100%',
      width: '100%',
      zIndex: -100,
      backgroundImage: 'url(images/shapeLeftRed1.svg)',

      backgroundRepeat: `no-repeat`,
      backgroundPosition: 'top left',
      backgroundSize: '40%',
    },
    '&::after': {
      position: 'absolute',
      content: '""',
      top: '40%',
      left: '20%',
      height: '100%',
      width: '100%',
      zIndex: -100,
      backgroundImage: 'url(images/shapeRightRed1.svg)',
      backgroundRepeat: `no-repeat`,
      backgroundPosition: 'bottom right',
      backgroundSize: '40%',
    },
    container: {
      minHeight: 'inherit',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    wrapper: {
      mt: 5,
      pt: 4,
      display: 'flex',
      justifyContent: 'left',
    },
    contentBox: {
      backgroundColor: 'white',
      display: 'flex',
      borderRadius: 20,
      width: '400px',
      height: '500px',
      boxShadow: '0px 4px 25px rgba(38, 78, 118, 0.1) ',
      p: 4,
      flexDirection: 'column',
      mx: 'auto',

      mb: ['40px', null, null, null, null, 7],
      img: {
        height: '50%',
      },
      Text: {
        px: 5,
      },
      endText: {
        mt: 3,
        display: 'flex',
        justifyContent: 'space-between',
      },
    },
    imageBox: {
      justifyContent: 'center',
      textAlign: 'center',
      display: 'inline-flex',
      mb: [0, null, -6, null, null, '-40px', null, -3],
      img: {
        position: 'relative',
        height: [245, 'auto'],
      },
    },
  },
};
