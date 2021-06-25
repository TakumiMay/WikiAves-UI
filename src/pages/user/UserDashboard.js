import React, { useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { connect } from "react-redux";
import { makeStyles } from '@material-ui/styles';
import { useHistory } from "react-router-dom";
import UserInfoBar from "../../components/UserInfoBar";
import TopBar from "../../components/TopBar";
import Scoreboard from "../../components/Scoreboard";
import UserAchievements from "../../components/UserAchievements";
import {
    Grid,
    Button
} from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: theme.palette.background.default,
      height: '100vh',
    },
    submit: {
        margin: theme.spacing(2, 2, 2),
    },
    lat: {
        paddingRight: theme.spacing(4),
    }
}));

const UserDashboard = (props) => {
    const classes = useStyles();
    const history = useHistory();

    const handleExpeditions = async(event) => {
        event.preventDefault();
    }
    const handleAchievements = async(event) => {
        event.preventDefault();
    }

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
                    className={classes.lat}
                >
                    <Scoreboard></Scoreboard>
                    <Grid
                        container
                        direction="row"
                        justify="flex-start"
                    >
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            onClick={handleExpeditions}
                        >
                            Ver mis expediciones
                        </Button>
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            onClick={handleAchievements}
                        >
                            Ver mis logros
                        </Button>
                    </Grid>
                    <Grid 
                        container
                    >
                        <UserAchievements></UserAchievements>
                    </Grid>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}

const mapStateToProps = (state) => ({
});

export default connect(mapStateToProps)(UserDashboard);
