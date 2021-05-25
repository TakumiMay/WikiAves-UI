/* eslint-disable no-unused-vars*/
import React, { useState } from "react";
import { connect } from "react-redux";
import { makeStyles } from '@material-ui/styles';
import { useHistory } from "react-router-dom";
import LoginCarousel from '../../components/LoginCarousel';
import CssBaseline from '@material-ui/core/CssBaseline';

import {
    Grid,
    Button,
    TextField,
    Link,
    Paper
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: theme.palette.background.default,
      height: '100vh',
    },
    paper: {
      margin: theme.spacing(8, 4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: theme.palette.secondary,
    },
    form: {
      width: '100%',
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
}));

const LoginPage = (props) => {
  const classes = useStyles();
  const history = useHistory();

  const handleForgottenPwdButton = async(event) => {
    history.push("/signUp");
  }
  const handleSingUpButton = async(event) => {
    history.push("/signUp");
  }
  const handleSubmit = async(event) => {
    event.preventDefault();
  }

  return (
    <Grid
      container
      className={classes.root}
    >
      <CssBaseline />
      <Grid item
        xs={false}
        sm={4}
        md={7}
        alignItems="center"
      >
        <LoginCarousel></LoginCarousel>
      </Grid>
      <Grid item
        xs={12}
        sm={8}
        md={5}
        component={Paper}
        elevation={6}
        square
      >
        <div className={classes.paper}>
        <form className={classes.form}
          onSubmit={handleSubmit}>

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Correo electrónico"
            name="email"
            autoComplete="email"
            autoFocus
          />

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Contraseña"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSubmit}
          >
            Iniciar Sesión
          </Button>
          <Grid container>
            <Grid item xs>
              <Link onClick={handleForgottenPwdButton} variant="body2">
                ¿Olvidaste tu contraseña?
              </Link>
            </Grid>
            <Grid item>
              <Link onClick={handleSingUpButton} variant="body2">
                {"¿No tienes una cuenta? Regístrate"}
              </Link>
            </Grid>
          </Grid>
        </form>
        </div>
      </Grid>
    </Grid>
  );
}
const mapStateToProps = (state) => ({
});

export default connect(mapStateToProps)(LoginPage);