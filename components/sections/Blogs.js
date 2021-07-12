import React from 'react'
import { Container, Box, Heading, Text, Image, Button,Grid } from 'theme-ui';
import data from "../../data/blog_data.js"

export const Blogs = () => {
  return (
   <Container sx={styles.banner} id="Blogs">
      <Container sx={styles.banner.container}>
        <Text as="h2" mt={2}>My Blogs</Text>
        <Grid sx={styles.banner.grid} >
        {data.map((item) => (
          <Box sx={styles.banner.contentBox}>
            <Image src={item.image}/>
            <Text as="h2" pt={3} textAlign="start">{item.title}</Text>
            <Text as="h4" pt={1}>{item.description}</Text>
            <Text as="p">{item.createdDate}</Text>
          </Box>
        ))}
        </Grid>
        
      </Container>
    </Container>
  );
}

const styles = {
  banner: {
    mt: 6,
    pt: 7,
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
    grid: {
      mt:6,
    pt: [0, null, null, null, null, null, 2],
    px: [5, 6, 0, null, 7, 8, 7],
    gridGap: [
      '40px 0',
      null,
      '45px 30px',
      null,
      '60px 50px',
      '70px 50px',
      null,
      '80px 90px',
    ],
    gridTemplateColumns: ['repeat(1,1fr)', null, 'repeat(2,1fr)'],
  },
    contentBox: {
      display:"flex",
      borderRadius: 20,
      width:"400px",
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
