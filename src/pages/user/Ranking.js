import React, { useState, useEffect } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { fade, makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import TopBar from "../../components/TopBar";
import FilterListIcon from '@material-ui/icons/FilterList';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { fetchWithToken } from '../../helpers/fetch';
import {
    Grid,
    Button,
    InputBase,
    Typography
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: theme.palette.background.default,
      height: '100vh',
    },
    title: {
        display: 'none',
        color: "#160D31",
        [theme.breakpoints.up('sm')]: {
          display: 'block',
          marginLeft: theme.spacing(6),
          marginTop: theme.spacing(4),
        },
    },
    filter: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(6),
          width: 'auto',
        },
    },
    filterIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
          width: '30ch',
        },
    },
    submit: {
        margin: theme.spacing(2, 2, 2),
    },
    tableC: {
        paddingLeft: theme.spacing(10),
        paddingRight: theme.spacing(10),
        marginRight: theme.spacing(20),
    },
    table: {
        minWidth: 650,
    },
}));

// function createData(username, city, region, experience, level) {
//   return { username, city, region, experience, level };
// }

// const rows = [
//   createData('Usernamee', 'Citi', 'Regiom', 30, 21),
// ];

const Ranking = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [ filterRegion, setFilterRegion ] = useState('');
    const [rows, setRows] = useState([]);

    const handleFilter = async(event) => {
        console.log("se filtrara por: "+filterRegion);
        async function loadedUsers(){
            const response = await fetchWithToken(`users/ranking/${filterRegion}`);
            const body = response.json();
            console.log(body);
            //setRows(body);
        }
        loadedUsers();
        //window.location.reload(false);
    }
    const handleGetRanking = async(event) => {
        async function loadedUsers(){
            const response = await fetchWithToken(`users/ranking`);
            const body = response.json();
            //setRows(body);
        }
        loadedUsers();
        //window.location.reload(false);
    }

    useEffect(() => {
        async function loadedUsers(){
          const response = await fetchWithToken(`users/ranking`);
          const body = response.json();
          console.log("este es el response:")
          console.log(body);
          //setRows(body.);
          console.log(rows);
        }
        loadedUsers();
    }, []);

    return (
        <React.Fragment>
            <CssBaseline />
            <TopBar></TopBar>
            <Grid
                container
                className={classes.root}
                direction="column"
            >
                <Typography className={classes.title} variant="h6" noWrap>
                    Ranking de usuarios
                </Typography>
                <Grid
                    container
                    direction="row"
                    justify="flex-start"
                    alignItems="center"
                >
                        <div className={classes.filter}>
                            <div className={classes.filterIcon}>
                                <FilterListIcon />
                            </div>
                            <InputBase
                                placeholder="Filtrar por región"
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                                onChange={event => {setFilterRegion(event.target.value)}}
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </div>
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            onClick={handleFilter}
                        >
                            Filtrar por región
                        </Button>
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            onClick={handleGetRanking}
                        >
                            Ver ranking general
                        </Button>
                        <Grid item
                            className={classes.tableC}
                            container
                        >
                            <TableContainer component={Paper}>
                                <Table className={classes.table} size="small" aria-label="a dense table">
                                    <TableHead>
                                    <TableRow>
                                        <TableCell>Nombre de usuario</TableCell>
                                        <TableCell align="right">Ciudad</TableCell>
                                        <TableCell align="right">Región</TableCell>
                                        <TableCell align="right">Experiencia</TableCell>
                                        <TableCell align="right">Nivel</TableCell>
                                    </TableRow>
                                    </TableHead>
                                    <TableBody>
                                    {rows && rows.map((row) => (
                                        <TableRow key={row.username}>
                                        <TableCell component="th" scope="row">
                                            {row.username}
                                        </TableCell>
                                        <TableCell align="right">{row.city}</TableCell>
                                        <TableCell align="right">{row.region}</TableCell>
                                        <TableCell align="right">{row.experience}</TableCell>
                                        <TableCell align="right">{row.level}</TableCell>
                                        </TableRow>
                                    ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Grid>
                </Grid>

            </Grid>
        </React.Fragment>
    )
} 

export default Ranking;
