import React, { useState } from "react";
import { connect } from "react-redux";
import { makeStyles } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import PersonIcon from '@material-ui/icons/Person';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import {
    Grid,
    Button,
    ListItem,
    ListItemIcon,
    ListItemText,
    Paper
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    paper: {
      margin: theme.spacing(8, 1),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: theme.palette.secondary,
    },
}));

const UserInfoBar = (props) => {
    const classes = useStyles();

    return (
        <Grid item
            xs={6}
            sm={4}
            md={2}
            component={Paper}
            elevation={2}
            square
        >
        <div className={classes.paper}>
            <AccountBoxIcon />
            <ListItem>
                <ListItemText primary="Daniel E. Guzmán" />
            </ListItem>
            <ListItem>
                <ListItemIcon>
                    <PersonIcon />
                </ListItemIcon>
                <ListItemText primary="@danes12" />
            </ListItem>
            <ListItem>
                <ListItemText primary="Una descripción libre del usuario" />
            </ListItem>
            <ListItem>
                <ListItemIcon>
                    <LocationOnIcon />
                </ListItemIcon>
                <ListItemText primary="Cali, Colombia" />
            </ListItem>
        </div>
      </Grid>
    );
}
const mapStateToProps = (state) => ({
});

export default connect(mapStateToProps)(UserInfoBar);