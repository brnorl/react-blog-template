import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from './Card';
import Container from '@mui/material/Container';

const useStyles = makeStyles((theme) => (
	{
    root:{
      margin:'5rem 2rem 2rem 2rem',
    },
	}
));

export default function About() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Container maxWidth="lg">
                <Card
                    title={ <a href='https://github.com/brnorl' target="_blank" >{'Check The GitHub!'}</a> }
                    paragraph={'You can find the projects that i have worked in my GitHub profile!'}
                    date={'9.10.2021'}
                    author={'Baransel Oral'}
                />
                <Card
                    title={'Mission'}
                    paragraph={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet nihil blanditiis vitae numquam consequuntur? Vero numquam repudiandae quidem! Consequuntur voluptates numquam sint autem blanditiis minus doloribus et aliquid unde illum.'}
                    date={'9.10.2021'}
                    author={'Baransel Oral'}
                />
                <Card
                    title={'Vision'}
                    paragraph={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet nihil blanditiis vitae numquam consequuntur? Vero numquam repudiandae quidem! Consequuntur voluptates numquam sint autem blanditiis minus doloribus et aliquid unde illum.'}
                    date={'9.10.2021'}
                    author={'Baransel Oral'}
                />
                
            </Container>
            
        </div>
    )
}
