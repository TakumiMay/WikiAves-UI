import React from "react";
import { makeStyles } from '@material-ui/styles';
import { CssBaseline } from "@material-ui/core";
import HomeTopBar from "../components/HomeTopBar";
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
}));

export default function MainPage() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <HomeTopBar />
            <footer className={classes.footer}>
                <Footer />
            </footer>
        </React.Fragment>
    );
}