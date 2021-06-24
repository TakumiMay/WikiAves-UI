import React, { useEffect } from "react";
import { makeStyles } from '@material-ui/styles';
import CssBaseline from "@material-ui/core/CssBaseline";
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
import CollectionsIcon from '@material-ui/icons/Collections';
import { Grid, Typography } from "@material-ui/core";
import { GiHummingbird } from 'react-icons/gi';
import { FaBinoculars } from 'react-icons/fa';
import { loadUserData } from '../actions/loadUserData';
import { useDispatch } from 'react-redux';

const useStyles = makeStyles((theme) => ({
    icon: {
        fontSize: 50,
    },
    item: {
        padding: theme.spacing(3),
        marginTop: theme.spacing(3),
    },
    text: {
        display: 'none',
        textAlign: 'center',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    number: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    }
}));
const Scoreboard = (props) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadUserData());
    }, []);

    return (
        <React.Fragment>
            <CssBaseline/>
            <Grid
                container
                direction="row"
                justify="space-evenly"
            >
                <Grid item
                    direction="column"
                    justify="center"
                    alignItems="center"
                    className={classes.item}
                >
                    <Grid item
                        direction="row"
                        alignItems="center"
                        justify="space-evenly"
                        container
                    >
                        <Typography className={classes.number} variant="h4">
                            {localStorage.getItem('achievements')}
                        </Typography>
                        <EmojiEventsIcon className={classes.icon}></EmojiEventsIcon>
                    </Grid>
                    <Typography className={classes.text}>
                        Logros
                    </Typography>
                </Grid>
                <Grid item
                    direction="column"
                    justify="center"
                    alignItems="center"
                    className={classes.item}
                >
                    <Grid item
                        direction="row"
                        alignItems="center"
                        justify="space-evenly"
                        container
                    >
                        <Typography className={classes.number} variant="h4">
                            {localStorage.getItem('expeditions')}
                        </Typography>
                        <FaBinoculars className={classes.icon}></FaBinoculars>   
                    </Grid>
                    <Typography className={classes.text}>
                        Expediciones
                    </Typography>
                </Grid>
                <Grid item
                    direction="column"
                    justify="center"
                    alignItems="center"
                    className={classes.item}
                >
                    <Grid item
                        direction="row"
                        alignItems="center"
                        justify="space-evenly"
                        container
                    >
                        <Typography className={classes.number} variant="h4">
                            {localStorage.getItem('photos')}
                        </Typography>
                        <CollectionsIcon className={classes.icon}></CollectionsIcon>
                    </Grid>
                    <Typography className={classes.text}>
                        Fotografías
                    </Typography>
                </Grid>
                <Grid item
                    direction="column"
                    justify="center"
                    alignItems="center"
                    className={classes.item}
                >
                    <Grid item
                        direction="row"
                        alignItems="center"
                        justify="space-evenly"
                        container
                    >
                        <Typography className={classes.number} variant="h4">
                            {localStorage.getItem('species')}
                        </Typography>
                        <GiHummingbird className={classes.icon}></GiHummingbird>
                    </Grid>
                    <Typography className={classes.text}>
                        Especies
                    </Typography>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}

export default Scoreboard;