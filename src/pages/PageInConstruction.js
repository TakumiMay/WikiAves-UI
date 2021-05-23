import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";
import {
    Grid,
    Button,
    Typography
} from '@material-ui/core';
import messages from "../constants/messages";

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    grid: {
        height: "100%",
        alignItems: 'center'
    },
    content: {
        height: '100%',
        display: 'flex',
        alignItems: 'center'
    },
    title: {
      flexGrow: 1,
    },
}));

export default function PageInConstruction() {
    const classes = useStyles();
    const history = useHistory();

    const handleGoHomeButton = async(event) => {
        history.push("/");
    }

    return (
        <div className={classes.root}>
            <Grid
                className={classes.grid}
                justify="center"
                container
            >
                <Grid
                    className={classes.content}
                    direction="column"
                    justify="center"
                    container
                >
                    <Typography variant="h5" className={classes.title}>
                        Página en construcción
                    </Typography>
                    <Typography variant="h7">
                        Lo sentimos, la página que estás buscando está en construcción.
                    </Typography>
                    <Button onClick={handleGoHomeButton}>
                        Ir a la página principal
                    </Button>
                </Grid>
            </Grid>
        </div>
    );
}
