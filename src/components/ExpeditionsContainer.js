import React, { useState, useEffect } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from '@material-ui/styles';
import { useHistory } from "react-router-dom";
import { fetchWithToken } from "../helpers/fetch";
import ExpeditionCard from "./ExpeditionCard";
import SightingCard from "./SightingCard";
import AddExpeditionDialog from "./AddExpeditionDialog";
import {
    Grid,
    Button,
    Container
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    submit: {
        margin: theme.spacing(2, 2, 2),
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
}));

const ExpeditionsContainer = () => {

    const classes = useStyles();
    const history = useHistory();
    const [ expeditions, setExpeditions ] = useState([]);
    const [ sightings, setSightings ] = useState([]);

    useEffect(() => {
        async function loadExpeditions(){
            const response = await fetchWithToken(`users/${localStorage.id}/expeditions`)
            response.json().then(
                data =>  setExpeditions(data)
                )
            //console.log(data);
        }
        loadExpeditions();
    }, []);

    const expeditionsCards = expeditions.map((expedition) => (
        <ExpeditionCard
            expedition={expedition}
        />
    ));

    const [isOpenAddDialog, setIsOpenAddDialog] = useState(false);
    const handleAddExpedition = () => {
        setIsOpenAddDialog(!isOpenAddDialog);
    };

    return (
        <React.Fragment>
            <CssBaseline />
            <Grid
                container
                direction="column"
            >
                <Grid
                    item
                >
                    <AddExpeditionDialog 
                        isDialogOpened={isOpenAddDialog}
                        handleCloseDialog={() => setIsOpenAddDialog(false)}
                    />
                    <Button
                        type="submit"
                        variant="outlined"
                        color="primary"
                        className={classes.submit}
                        onClick={() => handleAddExpedition()}
                    >
                        Agregar una nueva expedición
                    </Button>
                </Grid>
                
                <Container className={classes.cardGrid} maxWidth="md">
                    <Grid container spacing={4}>
                        {expeditionsCards}
                    </Grid>
                </Container>
                
            </Grid>
        </React.Fragment>
    );
}

export default ExpeditionsContainer;