import React from 'react'
import { Container, Box, Heading, Text,  Button,Image } from 'theme-ui';

import data from "../../data/skill_data"

export const Skills = () => {
  return (
   <section sx={styles.banner} id="Skills">
      <Container sx={styles.banner.container}>
        
        <Box sx={styles.banner.containerBox}>
          <Text as="h2" >My skills</Text>
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
    </section>
  );
}

const styles = {
  banner: {
    backgroundColor:"#f5f5f5",
    
    
    
    container: {
      minHeight: 'inherit',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: "center",
    },
    containerBox: {
      display:"flex",
      flexDirection:"column",
      borderRadius: 20,
      width: ['100%', '90%', '535px', null, '57%', '60%', '68%', '60%'],
      mx: 'auto',
      my: "3",
      p:"4",
      alignItems: "center",
      textAlign: 'center',
      justifyContent: "center",
      mb: ['40px', null, null, null, null, 7],
      boxShadow:"0px 4px 25px rgba(38, 78, 118, 0.1) " ,
      
    },
    contentBox: {
      display:"flex",
      borderRadius: 20,
      
      mx: 'auto',
      my: "3",
      p:"4",
      alignItems: "center",
      textAlign: 'left',
      justifyContent: "center",
      mb: ['40px', null, null, null, null, 7],
      
      
    },
    card: {
      p: "4",
 
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

