import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => (
	{
		root: {
            background:'rgba(0,0,0,0.2)',
            marginTop:'2.5rem',
		},
	}
));

export default function Footer() {
    const classes = useStyles();
    return (
        <footer className={classes.root} >
            <Box  >
                <Container maxWidth="lg">
                    <Grid container spacing={5}>
                        <Grid item xs={12} sm={4}>
                            <Box borderBottom={1}> Help </Box>
                            <Box>
                                <Link href="/" color="inherit">
                                    Community
                                </Link>
                            </Box>
                            <Box>
                                <Link href="/login" color="inherit">
                                    Login
                                </Link>
                            </Box>
                            <Box>
                                <Link href="/about" color="inherit">
                                    About
                                </Link>
                            </Box> 
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Box borderBottom={1}> Contact Me </Box>
                            <Box>
                                <Link href="https://www.linkedin.com/in/baranseloral/" color="inherit">
                                    LınkedIn
                                </Link>
                            </Box>
                            <Box>
                                <Link href="https://github.com/brnorl" color="inherit">
                                    GitHub
                                </Link>
                            </Box>
                             
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Box borderBottom={1}> Copyright </Box>
                            <Box>
                                <Link href="/" color="inherit">
                                    Copyright
                                </Link>
                            </Box>
                            <Box>
                                <Link href="/" color="inherit">
                                    @
                                </Link>
                            </Box>
                            <Box>
                                <Link href="/" color="inherit">
                                    2021
                                </Link>
                            </Box>  
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </footer>
    )
}
