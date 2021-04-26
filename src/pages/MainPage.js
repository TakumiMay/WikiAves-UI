import React from "react";
import { makeStyles } from '@material-ui/styles';
import { CssBaseline } from "@material-ui/core";
import TopBar from "../components/TopBar";
import Footer from "../components/Footer";

const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: theme.palette.background.default,
      height: "100%",
    },
    grid: {
      height: "100%",
    },
    content: {
      height: '100%',
      display: 'flex',
      alignItems: 'auto',
    },
    contentHeader: {
      display: 'flex',
      alignItems: 'center',
      paddingTop: theme.spacing(5),
      paddingBottom: theme.spacing(2),
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2)
    },
    contentBody: {
      flexGrow: 1,
      display: 'flex',
      alignItems: 'center',
      [theme.breakpoints.down('md')]: {
        justifyContent: 'auto'
      }
    },
    form: {
      margin: 'auto',
      paddingLeft: 100,
      paddingRight: 100,
      paddingBottom: 125,
      flexBasis: 700,
      [theme.breakpoints.down('sm')]: {
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
      }
    },
    title: {
      marginTop: theme.spacing(3),
    },
    sugestion: {
      marginTop: theme.spacing(2),
    },
    textField: {
      marginTop: theme.spacing(2),
    },
    signInButton: {
      margin: theme.spacing(1, 0),
    },
}));

export default function MainPage() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <TopBar />
            <footer className={classes.footer}>
                <Footer />
            </footer>
        </React.Fragment>
    );
}