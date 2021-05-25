import React, { useState } from "react";
import { connect } from "react-redux";
import { makeStyles } from '@material-ui/styles';
import { useHistory } from "react-router-dom";
import UserInfoBar from "../../components/UserInfoBar"
import {
    Grid
} from '@material-ui/core';
import TopBar from "../../components/TopBar";

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
        <Grid
          container
          className={classes.root}
          direction="column"
        >
            <TopBar></TopBar>
            <Grid item
                direction="row"
                container
            >
                <UserInfoBar></UserInfoBar> 
            </Grid>
        </Grid>
    );
}

const mapStateToProps = (state) => ({
});

export default connect(mapStateToProps)(UserDashboard);
