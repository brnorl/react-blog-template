import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import SvgIcon from '@mui/material/SvgIcon';
import { makeStyles } from '@material-ui/core/styles';
import AboutPage from './components/About'
import ContactPage from './components/Contact'
import HomePage from './components/Home'
import LoginPage from './components/Login'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Footer from './components/Footer';

const useStyles = makeStyles((theme) => (
	{
		root: {
      background:'rgba(0,0,0,0.05)',
		},
		link:{
			marginRight:'2rem',
			padding:'1rem 0',
			color:'#F2F2F2',
      textDecoration: 'none'
		},
    nav:{
      background:'rgba(0,0,0,0.4)',
    },
    footer:{
      marginBottom:'1rem'
    }
   

	}
));

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}



function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      
      <Router>
          <Box sx={{ flexGrow: 1 }} >
              <AppBar position="fixed" color="primary">
                <Toolbar className={classes.nav}>
                  <HomeIcon fontSize="large" sx={{mr:2,ml:2}} />
                    <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                      Blog
                    </Typography>
                      <Link to="/" className={classes.link}>
                        <Button sx={{mr:2 , p:1}} color="inherit">
                            Home
                        </Button>
                      </Link>
                      <Link to="/about" className={classes.link}>
                    <Button sx={{mr:2 , p:1}} color="inherit">
                        About
                    </Button>
                      </Link>
                      <Link to="/contact" className={classes.link}>
                    <Button sx={{mr:2 , p:1}} color="inherit">
                        Contact
                    </Button>
                      </Link>
                      <Link to="/login" className={classes.link}>
                    <Button sx={{mr:9 , p:1}} color="inherit">
                        Login
                    </Button>
                      </Link>
              </Toolbar>
            </AppBar>
        </Box>
        <Switch>
          <Route exact path="/">
            <HomePage/>
          </Route>
          <Route exact path="/about">
            <AboutPage/>
          </Route>
          <Route exact path="/contact">
            <ContactPage/>
          </Route>
          <Route exact path="/login">
            <LoginPage/>
          </Route>
        </Switch>
    </Router>
    
    <Footer/>
    </div> 
  );
}

export default App;
