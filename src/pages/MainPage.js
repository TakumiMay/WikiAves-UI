import React from "react";
import { fade, makeStyles } from '@material-ui/core/styles';
import { CssBaseline, InputBase, Grid, Container } from "@material-ui/core";
import HomeTopBar from "../components/HomeTopBar";
import Footer from "../components/Footer";
import Typography from '@material-ui/core/Typography';
import messages from "../constants/messages";
import SearchIcon from '@material-ui/icons/Search';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: theme.palette.background.default,
      height: "100%",
    },
    paper: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
      paddingLeft: theme.spacing(50),
      paddingRight: theme.spacing(50), 
      backgroundColor: theme.palette.background.green,
    },
    grid: {
      height: "100%",
    },
    content: {
      height: '100%',
      display: 'flex',
      alignItems: 'auto',
    },
    text: {
      color: "#FCFCFC",
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(6),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '50ch',
      },
    },
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
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

const cards = [1, 2, 3];

export default function MainPage() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <HomeTopBar />
            <Grid
              container
              className={classes.root}
            >
              <Grid item
                alignItems="center"
                justify="center"
                className={classes.paper}
                container
              >
                <Typography className={classes.text} component="h3" variant="h4" align="center" color="#FFFFFF" gutterBottom>
                  {messages.appDescription1}
                </Typography>
                <Typography className={classes.text} variant="h6" align="center" color="#FFFFFF" paragraph>
                  {messages.appDescription2}
                </Typography>
                <Typography variant="h7" align="center" color="secondary" paragraph>
                  {messages.appDescription3}
                </Typography>
                <div className={classes.search}>
                    <div className={classes.searchIcon}>
                        <SearchIcon />
                    </div>
                    <InputBase
                        placeholder="Busca por nombre común o científico"
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                        }}
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </div>
              </Grid>
              
              <Container
                className={classes.cardGrid}
                maxWidth="md"
              >
                <Grid container spacing={4}>
                {cards.map((card) => (
                  <Grid item key={card} xs={12} sm={6} md={4}>
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
                ))}
                </Grid>
              </Container>
              
              <Grid item
                alignItems="center"
                justify="center"
                container
              >
                <footer className={classes.footer}>
                  <Footer />
                </footer>
              </Grid>
            </Grid>
        </React.Fragment>
    );
}