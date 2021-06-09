import React, { useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { connect } from "react-redux";
import { makeStyles } from '@material-ui/styles';
import { useHistory } from "react-router-dom";
import UserInfoBar from "../../components/UserInfoBar"
import {
    Grid
} from '@material-ui/core';
import TopBar from "../../components/TopBar";
import Scoreboard from "../../components/Scoreboard";

const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: theme.palette.background.default,
      height: '100vh',
    },
}));

const UserDashboard = (props) => {
    const classes = useStyles();
    const history = useHistory();

    return (
        <React.Fragment>
            <CssBaseline />
            <TopBar></TopBar>
            <Grid
                container
                className={classes.root}
                direction="row"
            >
                <Grid item
                    xs={6}
                    sm={3}
                    container
                >
                    <UserInfoBar></UserInfoBar> 
                </Grid>
                <Grid item
                    xs={18}
                    sm={9}
                    container
                    direction="column"
                >
                    <Scoreboard></Scoreboard>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}

const mapStateToProps = (state) => ({
});

export default connect(mapStateToProps)(UserDashboard);
