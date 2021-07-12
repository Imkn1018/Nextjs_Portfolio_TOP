import React from 'react'
import { Container, Box, Heading, Text,  Button,Image } from 'theme-ui';

import data from "../../data/skill_data"

export const Skills = () => {
  return (
   <Heading sx={styles.banner} id="Skills">
      <Container sx={styles.banner.container}>
        <Text as="h2" >My skills</Text>
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
}

const styles = {
  banner: {
    mt: 5,
    backgroundColor:"#f5f5f5",
    py: 10,
    
    
    container: {
      minHeight: 'inherit',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: "center",
    },
    containerBox: {
      backgroundColor: "white", 
      display:"flex",
      flexDirection:"column",
      borderRadius: 20,
      mx: 'auto',
      my: "3",
      pl:"8",
      pr: 2,
      py: 4,
      alignItems: "center",
      textAlign: 'center',
      justifyContent: "center",
      mb: ['40px', null, null, null, null, 7],
      boxShadow:"0px 4px 25px rgba(38, 78, 118, 0.1) " ,
      
    },
    contentBox: {
      display:"flex",
      borderRadius: 20,
      flexWrap: "wrap",
      mx: 'auto',
      my: "3",
      pt: 2,
      alignItems: "center",
      textAlign: 'left',
      justifyContent: "start",
      mb: ['40px', null, null, null, null, 7],
      
      
    },
    card: {
      px: 5,
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

