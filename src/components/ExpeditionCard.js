import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import VisibilityIcon from "@material-ui/icons/Visibility";

const useStyles = makeStyles((theme) => ({
  card: {
    minWidth: 275,
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  cardContent: {
    flexGrow: 1,
  },
}));

export default function ExpeditionCard({ expedition }) {
    const classes = useStyles();

    const handleViewSightings = async(event) => {
      
    }

    return (
      <Card className={classes.card}>
      <CardContent className={classes.cardContent}>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          { expedition.date }
        </Typography>
        <Typography variant="h5" component="h2">
          { expedition.name }
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
        { expedition.city }, { expedition.region }
        </Typography>
        <Typography variant="body2" component="p">
          { expedition.description }
        </Typography>
      </CardContent>
      <CardActions>
        <Button 
          size="small"
          color="primary"
          onClick={handleViewSightings()}
        >
          <VisibilityIcon style={{ marginRight: "5px" }} />
          {"Ver  avistamientos"}
        </Button>
      </CardActions>
    </Card>
    );
}
