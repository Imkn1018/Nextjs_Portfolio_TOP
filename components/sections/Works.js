import React from 'react'
import { Container, Box, Heading, Text, Image, Button } from 'theme-ui';
import data from "../../data/works_data.js"

export const Works = () => {
  return (
   <section sx={styles.banner} id="Works">
      <Container sx={styles.banner.container}>
        <Text as="h2">My Works</Text>
        <Box sx={styles.wrapper} >
        {data.map((item) => (
          <Box sx={styles.banner.contentBox}>
            <Image src={item.image}/>
            <Text as="h2" pt={3} textAlign="start">{item.title}</Text>
            <Text as="h4" pt={1}>{item.description}</Text>
            <Text as="p">{item.createdDate}</Text>
          </Box>
        ))}
        </Box>
        
      </Container>
    </section>
  );
}

const styles = {
  banner: {
    pt: ['140px', '145px', '155px', '170px', null, null, '180px', '215px'],
    pb: [2, null, 0, null, 2, 0, null, 5],
    position: 'relative',
    zIndex: 2,
    '&::before': {
      position: 'absolute',
      content: '""',
      bottom: 6,
      left: 0,
      height: '100%',
      width: '100%',
      zIndex: -1,
      // backgroundImage: `url(${ShapeLeft})`,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: 'bottom left',
      backgroundSize: '36%',
    },
    '&::after': {
      position: 'absolute',
      content: '""',
      bottom: '40px',
      right: 0,
      height: '100%',
      width: '100%',
      zIndex: -1,
      // backgroundImage: `url(${ShapeRight})`,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: 'bottom right',
      backgroundSize: '32%',
    },
    container: {
      minHeight: 'inherit',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems:"center",
    },
    wrapper: {
      display:"flex",
      justifyContent:"left",
      
    },
    contentBox: {
      display:"flex",
      borderRadius: 20,
      width:"500px",
      height:"500px",
      boxShadow:"0px 4px 25px rgba(38, 78, 118, 0.1) " ,
      p: "4",
      flexDirection:"column",
      mx: 'auto',
      textAlign: 'center',
      mb: ['40px', null, null, null, null, 7],
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
