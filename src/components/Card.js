import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => (
	{
    root:{
      margin:'1rem',
      color:'#000',
    },
		
	}
));

export default function BasicCard(props) {
  const {date , title , paragraph,author}=props;
  const classes = useStyles();

  return (
    <Card className={classes.root}
     style={{backgroundColor: "rgba(0,0,0,0.1)"}} >
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {date}
        </Typography>
        <Typography variant="h5" component="div">
            {title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {author}
        </Typography>
        <Typography variant="body2">
            {paragraph}
        </Typography>
      </CardContent>  
    </Card>
  );
}
