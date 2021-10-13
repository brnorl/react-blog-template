import React from 'react';
import {Grid} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { TextField ,Button,} from '@mui/material';

const useStyles = makeStyles((theme) => (
	{
    root:{
      margin:'4rem 0 0 0',
    },
    btn:{
        margin:'1rem'
    },
	}
));

export default function Login() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container style={{minHeight:'100vh'}}>
                <Grid item xs={12} sm={6}>
                    <img src="https://cdn.pixabay.com/photo/2014/05/02/21/50/home-office-336377__480.jpg"
                    alt="cover"
                    style={{width:'100%',height:'100%',objectFit:'cover'}}
                />
                </Grid>
                <Grid 
                container 
                item 
                alignItems="center" 
                direction="column" 
                justify="space-between"
                xs={12} sm={6}>
                    <div/>
                    <div style={{display:'flex' , flexDirection:'column', maxWidth:400, minWidth:300}}>
                        <Grid container justify="center">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb7OX8-030FDWTdZsUsosI1W7mpolxXzogmw&usqp=CAU"
                            width={150}
                            alt="logo" />
                        </Grid>
                        <TextField 
                        label="Username" 
                        margin="normal" 
                        />
                        <TextField 
                        label="Password" 
                        margin="normal"/>
                        <Button sx={{mb:1}} color="primary" variant="contained">
                            Login
                        </Button>
                        <Button color="inherit" variant="contained">
                            Don't Have An Account ?
                        </Button>
                    </div>
                    
                        <Grid container justify="center">
                            <Grid item xs={6}>
                                <Button sx={{mb:2}} color="inherit" variant="contained">
                                    Forgot Password ?
                                </Button>

                            </Grid>
                            <Grid item >
                                <Button sx={{mb:2}} color="inherit" variant="contained">
                                    Community Page
                                </Button>
                                
                            </Grid>
                        </Grid>
                        <div/>
                    
                </Grid>
            </Grid>
        </div>
    )
}
