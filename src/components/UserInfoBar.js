import React, { useEffect } from "react";
import { connect } from "react-redux";
import { makeStyles } from '@material-ui/styles';
import { loadUserData } from '../actions/loadUserData';
import { useDispatch } from 'react-redux';
import PersonIcon from '@material-ui/icons/Person';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import KeyboardCapslockIcon from '@material-ui/icons/KeyboardCapslock';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import EmailIcon from '@material-ui/icons/Email';
import StarsIcon from '@material-ui/icons/Stars';
import {
    Grid,
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
        verticalAlign: 'middle',
        paddingTop: theme.spacing(1),
    }
}));

const UserInfoBar = (props) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadUserData());
    }, []);

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
                    {localStorage.getItem('name')+" "+localStorage.getItem('last_names')}
                </Typography>
                
            </ListItem>
            <ListItem>
                <PersonIcon />
                <InputLabel className={classes.text}>
                    {"@"+localStorage.getItem('username')}
                </InputLabel>
            </ListItem>
            <ListItem>
                <LocationOnIcon />
                <InputLabel className={classes.text}>
                    {localStorage.getItem('city')+", "+localStorage.getItem('region')}
                </InputLabel>
            </ListItem>
            <ListItem>
                <EmailIcon />
                <InputLabel className={classes.text}>
                    {localStorage.getItem('email')}
                </InputLabel>
            </ListItem>

            <ListItem>
                <KeyboardCapslockIcon />
                <InputLabel className={classes.text}>
                    {"Nivel: "+localStorage.getItem('level')}
                </InputLabel>
            </ListItem>
            <ListItem>
                <StarsIcon />
                <InputLabel className={classes.text}>
                    {localStorage.getItem('experience')+" puntos de experiencia"}
                </InputLabel>
            </ListItem>
            
        </div>
        </Grid>
    );
}
const mapStateToProps = (state) => ({
});

export default connect(mapStateToProps)(UserInfoBar);