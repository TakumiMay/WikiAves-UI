import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import FavoriteIcon from "@material-ui/icons/Favorite";
import CameraEnhanceIcon from '@material-ui/icons/CameraEnhance';
import Avatar from '@material-ui/core/Avatar';
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  card: {
    minWidth: 275,
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  cardContent: {
    flexGrow: 1
  },
  expand: {
    marginLeft: "auto",
  },
  avatar: {
    backgroundColor: red[500],
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
}));

export default function App({ sighting }) {
  const classes = useStyles();

  const handleIsCorrectVote = async (event) => {};

  const handleIsNotCorrectVote = async (event) => {};

  const handleLikeInteraction = async (event) => {};

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            <CameraEnhanceIcon />
          </Avatar>
        }
        
        title="Nombre comun"
        subheader="Nombre cientifico"
      />
      <CardMedia
          className={classes.media}
          image="https://www.icesi.edu.co/wiki_aves_colombia/show_image.php?id=4466"
          title="Paella dish"
      />
      <CardContent className={classes.cardContent}>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {"23/07/2021"}
        </Typography>
        <Typography variant="body2" component="p">
          {"¿Son correctos los nombres?"}
        </Typography>
      </CardContent>
      <CardActions>
        <Button 
          size="small" 
          color="primary" 
          onClick={handleIsCorrectVote()}
        >
          <ThumbUpIcon style={{ marginRight: "5px" }} />
        </Button>
        <Button 
          size="small" 
          color="primary" 
          onClick={handleIsNotCorrectVote()}
        >
          <ThumbDownIcon style={{ marginRight: "5px" }} />
        </Button>
        <Button
          size="small"
          color="primary"
          onClick={handleLikeInteraction()}
          className={classes.expand}
        >
          <FavoriteIcon style={{ marginLeft: "350px", marginRight: "5px" }} />
          {7}
        </Button>
      </CardActions>
    </Card>
  );
}
