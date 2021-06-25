import React, { useState, useEffect } from 'react';
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { fetchWithToken } from '../helpers/fetch';
import {
  Grid,
  Button
} from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  text: {
    fontWeight: 'bold',
  },
  submit: {
    margin: theme.spacing(2, 2, 2),
  },
}));

export default function UserAchievements() {
  const classes = useStyles();
  const [rows, setRows] = useState([]);

  const handleGetAchievements = async(event) => {
    async function loadedUsers(){
        const response = await fetchWithToken(`users/achievements`);
        response.json().then(
            data =>  setRows(data)
            )
        console.log("logros "+localStorage.id);
        console.log(rows);
    }
    loadedUsers();
  }

  const handleGetUserAchievements = async(event) => {
        async function loadedUsers(){
            const response = await fetchWithToken(`users/${localStorage.id}/achievements`);
            response.json().then(
                data =>  setRows(data)
                )
            console.log("mis logros");
            console.log(rows);
        }
        loadedUsers();
  }

  useEffect(() => {
    async function loadedAchievements(){
        const response = await fetchWithToken(`users/${localStorage.id}/achievements`);
        response.json().then(
            data =>  setRows(data)
        )
        console.log(rows);
    }
    loadedAchievements();
  }, []);

  return (
    <React.Fragment>
      <CssBaseline />
      <Grid
        container
        direction="column"
      >
        <Grid 
        >
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleGetAchievements}
          >
            Todos los logros
          </Button>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleGetUserAchievements}
          >
            Mis logros
          </Button>
        </Grid>
        <TableContainer component={Paper}>
          <Table className={classes.table} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell className={classes.text}>Nombre del logro</TableCell>
                <TableCell className={classes.text}>Descripción</TableCell>
                <TableCell className={classes.text}>Puntos de experiencia</TableCell>
                <TableCell className={classes.text}>Fecha de obtención</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell>{row.description}</TableCell>
                  <TableCell>{row.xp_value}</TableCell>
                  <TableCell>{row.unlock_date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </React.Fragment>
  );
}
