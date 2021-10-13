import React from 'react'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Card from './Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

const useStyles = makeStyles((theme) => (
	{
    root:{
      margin:'5rem 2rem 2rem 2rem',
    },
    listItem:{
      margin:'0 1rem 1rem 0',
      border:'2px solid rgba(0,0,0,0.3)',
      borderRadius:'0 0 1rem 1rem',
    },
    listItemText:{
      margin:'1rem',
      textAlign:'center',
    }
	}
));

const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: 'Breakfast',
      author: '@bkristastucchio',
      link:'https://www.linkedin.com/in/baranseloral/'
    },
    {
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      title: 'Burger',
      author: '@rollelflex_graphy726',
      link:'https://www.linkedin.com/in/baranseloral/'

    },
    {
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: 'Camera',
      author: '@helloimnik',
      link:'https://www.linkedin.com/in/baranseloral/'

    },
    {
      img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
      title: 'Coffee',
      author: '@nolanissac',
      link:'https://www.linkedin.com/in/baranseloral/'

    },
    {
      img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
      title: 'Hats',
      author: '@hjrc33',
      link:'https://www.linkedin.com/in/baranseloral/'

    },
    {
      img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
      title: 'Honey',
      author: '@arwinneil',
      link:'https://www.linkedin.com/in/baranseloral/'

    },
    {
      img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
      title: 'Basketball',
      author: '@tjdragotta',
      link:'https://www.linkedin.com/in/baranseloral/'

    },
    {
      img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
      title: 'Fern',
      author: '@katie_wasserman',
      link:'https://www.linkedin.com/in/baranseloral/'

    },
    {
      img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
      title: 'Mushrooms',
      author: '@silverdalex',
      link:'https://www.linkedin.com/in/baranseloral/'

    },
    {
      img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
      title: 'Tomato basil',
      author: '@shelleypauls',
      link:'https://www.linkedin.com/in/baranseloral/'

    },
    {
      img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
      title: 'Sea star',
      author: '@peterlaster',
      link:'https://www.linkedin.com/in/baranseloral/'

    },
    {
      img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
      title: 'Bike',
      author: '@southside_customs',
      link:'https://www.linkedin.com/in/baranseloral/'

    },
  ];

export default function Home() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
        <React.Fragment>
            <CssBaseline />
                <Container maxWidth="lg">
                  <Grid container spacing={2}>
                      <Grid item xs={4}>
                          <Card
                            title={'Check the news'}
                            paragraph={'Lorem ipsum dolor sit amet.'}
                            date={'9.10.2021'}
                            author={'Baransel Oral'}
                          /> 
                          <Card
                            title={'New story came up ! '}
                            paragraph={'Lorem ipsum dolor sit amet.'}
                            date={'9.10.2021'}
                            author={'Baransel Oral'}
                          /> 
                          <Card
                            title={'My biggest platform! Motivation, quotes, stories, and more.'}
                            paragraph={'Lorem ipsum dolor sit amet.'}
                            date={'9.10.2021'}
                            author={'Baransel Oral'}
                          /> 
                          <Card
                            title={'An inside look at my life through stories.'}
                            paragraph={'Lorem ipsum dolor sit amet.'}
                            date={'9.10.2021'}
                            author={'Baransel Oral'}
                          /> 
                          <Card
                            title={'My learnings and perspectives from building big businesses!'}
                            paragraph={'Lorem ipsum dolor sit amet.'}
                            date={'9.10.2021'}
                            author={'Baransel Oral'}
                          /> 
                          <Card
                            title={'Create Your Own Economy'}
                            paragraph={'Lorem ipsum dolor sit amet.'}
                            date={'9.10.2021'}
                            author={'Baransel Oral'}
                          /> 
                      </Grid>
                      <Grid item xs={8}>
                        <ImageList className={classes.list}>
                          {itemData.map((item) => (
                            <ImageListItem className={classes.listItem} key={item.img}>
                              <img
                              src={`${item.img}?w=248&fit=crop&auto=format`}
                              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                              alt={item.title}
                              loading="lazy"
                              />
                              <ImageListItemBar
                              className={classes.listItemText}
                              title={ <a href={item.link} target="_blank" >{item.title}</a> }
                              subtitle={<span>by: {item.author}</span>}
                              position="below"
                              />
                        </ImageListItem>
                                ))}
               </ImageList>
            </Grid>
        </Grid>
     </Container>
  </React.Fragment>
</div>
    )
}
