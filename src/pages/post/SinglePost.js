import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import TopBar from "../../components/TopBar";
import Footer from "../../components/Footer";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { 
    CssBaseline, 
    Grid, 
    Typography
  } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: theme.palette.background.default,
      height: "100%",
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    cardMedia: {
      paddingTop: '56.25%', // 16:9
    },
    cardContent: {
      flexGrow: 1,
    },
    footer: {
      padding: theme.spacing(6),
    },
}));

export default function MainPage() {
    const classes = useStyles();

    const handleSearch = async(event) => {
      event.preventDefault();
    }
    
    return (
        <React.Fragment>
            <CssBaseline />
            <TopBar />
            <Grid
              container
              className={classes.root}
              justify="center"
            >
                <Card className={classes.card}>
                    <CardMedia
                        className={classes.cardMedia}
                        image="https://www.icesi.edu.co/wiki_aves_colombia/show_image.php?id=4466"
                        title="Image title"
                    />
                    <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="h2">
                          Sirystes sibilator
                        </Typography>
                        <Typography>
                          El siristes es una especie de tiránido poco común y poco conocido que forrajea en la parte alta de los bosques. 
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Footer />
        </React.Fragment>
    );
}