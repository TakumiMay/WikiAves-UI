import React, { useState } from "react";
import { connect } from "react-redux";
import { makeStyles } from '@material-ui/styles';
import PersonIcon from '@material-ui/icons/Person';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import StarsIcon from '@material-ui/icons/Stars';
import {
    Grid,
    Button,
    InputLabel,
    ListItem,
    Typography,
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
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
          display: 'block',
        },
    },
    text: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
        display: 'block',
        marginLeft: theme.spacing(1),
        },
    }
}));

const UserInfoBar = (props) => {
    const classes = useStyles();

    return (
        <Grid item
            component={Paper}
            elevation={2}
            square
        >
        <div className={classes.paper}>
            <AccountBoxIcon style={{ fontSize: 200 }}/>
            <ListItem>
                <Typography className={classes.title} variant="h6" noWrap>
                    Daniel E. Guzmán
                </Typography>
                
            </ListItem>
            <ListItem>
                <PersonIcon />
                <InputLabel className={classes.text}>
                  @Danes34
                </InputLabel>
            </ListItem>
            <ListItem>
                <LocationOnIcon />
                <InputLabel className={classes.text}>
                  Cali, Valle del Cauca
                </InputLabel>
            </ListItem>
            <ListItem>
                <InputLabel className={classes.text}>
                Una descripción libre del usuario
                </InputLabel>
            </ListItem>

            <ListItem>
                <LocationOnIcon />
                <InputLabel className={classes.text}>
                    Nivel: Cacique candela
                </InputLabel>
            </ListItem>
            <ListItem>
                <StarsIcon />
                <InputLabel className={classes.text}>
                    54 puntos de experiencia
                </InputLabel>
            </ListItem>
            
        </div>
        </Grid>
    );
}
const mapStateToProps = (state) => ({
});

export default connect(mapStateToProps)(UserInfoBar);