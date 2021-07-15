import React from 'react';
import { Container, Box, Heading, Text, Button, Image } from 'theme-ui';

import data from '../../data/skill_data';
import { useEffect, useRef } from 'react';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export const Skills = () => {
  useEffect(() => {
    if (process.browser) {
      gsap.registerPlugin(ScrollTrigger);
      setAnimation();
    }
  }, []);
  const setAnimation = () => {
    gsap.fromTo(
      '#Skills',
      { opacity: 0, y: 10 }, //fromの設定
      {
        //toの設定
        opacity: 1,
        y: 0,
        duration: 2,
        scrollTrigger: {
          trigger: '#Skills',
          start: 'top center', //要素のトップが、画面の中央まできたら開始
          end: 'bottom center', //要素のボトムが、画面の中央まできたら終了
          onEnter: () => {
            console.log('scroll In');
          },
          onEnterBack: () => {
            console.log('scroll Back');
          },
        },
      }
    );
  };
  return (
    <Heading sx={styles.banner} id="Skills">
      <Container sx={styles.banner.container}>
        <Text as="h2">My skills</Text>
        <Box sx={styles.banner.containerBox}>
          <Box sx={styles.banner.contentBox}>
            {data.map((item) => (
              <Box sx={styles.banner.card}>
                <Image src={item.imageicon} height="80" width="80" />
              </Box>
            ))}
          </Box>
        </Box>
        <Box sx={styles.banner.imageBox}>
          {/* <Image src={BannerImg} alt="banner" /> */}
        </Box>
      </Container>
    </Heading>
  );
};

const styles = {
  banner: {
    mt: 5,
    mx: 'auto',
    py: 10,
    zindex: 100,
    '&::before': {
      position: 'absolute',
      content: '""',
      bottom: '0%',
      right: '20%',
      height: '100%',
      width: '100%',
      zIndex: -100,
      backgroundImage: 'url(images/shapeLeftOrange.png)',

      backgroundRepeat: `no-repeat`,
      backgroundPosition: 'top left',
      backgroundSize: '40%',
    },
    '&::after': {
      position: 'absolute',
      content: '""',
      top: '20%',
      left: '20%',
      height: '100%',
      width: '100%',
      zIndex: -100,
      backgroundImage: 'url(images/shapeRightOrange.png)',
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
    containerBox: {
      backgroundColor: 'white',
      display: 'flex',

      borderRadius: 20,
      mx: 'auto',
      my: '3',

      py: 4,
      alignItems: 'center',
      textAlign: 'center',
      justifyContent: 'center',
      mb: ['40px', null, null, null, null, 7],
      boxShadow: '0px 4px 25px rgba(38, 78, 118, 0.1) ',
    },
    contentBox: {
      display: 'flex',
      borderRadius: 20,
      flexWrap: 'wrap',
      mx: 'auto',
      my: '3',
      px: 3,
      pt: 2,
      alignItems: 'center',
      textAlign: 'center',
      justifyContent: 'center',
      mb: ['40px', null, null, null, null, 7],
    },
    card: {
      px: 4,
      py: 5,
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
