import React from "react";
import { makeStyles } from '@material-ui/styles';
import CssBaseline from "@material-ui/core/CssBaseline";
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
import CollectionsIcon from '@material-ui/icons/Collections';
import { Grid, Typography } from "@material-ui/core";
import { GiHummingbird } from 'react-icons/gi';
import { FaBinoculars } from 'react-icons/fa';

const useStyles = makeStyles((theme) => ({
    icon: {
        fontSize: 50,
    },
    item: {
        padding: theme.spacing(3),
    },
    text: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    number: {
        marginRight: theme.spacing(1),
    }
}));
const Scoreboard = (props) => {
    const classes = useStyles();

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
                        container
                    >
                        <Typography className={classes.number} variant="h4">
                            12
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
                        container
                    >
                        <Typography className={classes.number} variant="h4">
                            12
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
                        container
                    >
                        <Typography className={classes.number} variant="h4">
                            12
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
                        container
                    >
                        <Typography className={classes.number} variant="h4">
                            12
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