/* eslint-disable no-unused-vars*/
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { makeStyles } from '@material-ui/styles';
import { useHistory } from "react-router-dom";
import LoginCarousel from '../../components/LoginCarousel';
import { login } from '../../actions/auth/actionAuth';
import CssBaseline from '@material-ui/core/CssBaseline';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import validate from 'validate.js';
import {
    Grid,
    Button,
    TextField,
    Typography,
    Link,
    Paper
} from '@material-ui/core';
import { propTypes } from "react-bootstrap/esm/Image";

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
    title: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
}));

const schema = {
  User: {
    presence: { allowEmpty: false, message: "es requerido" },
    length: {
      maximum: 64,
    },
  },
  password: {
    presence: { allowEmpty: false, message: "es requerido" },
    length: {
      minimum: 2,
      maximum: 64,
      message: "longitud no adecuada",
    },
  },
};

const LoginPage = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const handleForgottenPwdButton = async(event) => {
    history.push("/signUp");
  }
  const handleSingUpButton = async(event) => {
    history.push("/signUp");
  }

  const { isLoggedIn } = props;
  if(isLoggedIn ==='Y')  {
    history.push("/profile")
  }

  const dispatch = useDispatch();
  const handleSubmit = async(event) => {
    dispatch(login(formState.values.User, formState.values.password));
    event.preventDefault();
  }

  const [formState, setFormState] = useState({
    isValid: false,
    values: {},
    errors: {},
  });
  const hasError = (field) =>
    formState.errors[field] ? true : false;
  useEffect(() => {
    const errors = validate(formState.values, schema);
  setFormState((formState) => ({
      ...formState,
      isValid: errors ? false : true,
      errors: errors || {},
    }));
  }, [formState.values]);

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
        <Typography className={classes.title} variant="h6" noWrap>
          WikiAves Icesi
        </Typography>
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
            
            fullWidth
            id="email"
            label="Usuario"
            name="User"
            autoComplete="User"
            autoFocus
            value={formState.values.User || ""}
            error={hasError("User")}
            helperText={
              hasError("User") ? "El nombre de usuario es requerido" : null
            }
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
            value={formState.values.password || ""}
            error={hasError("password")}
            helperText={
              hasError("password") ? "La contraseña es requerida" : null
            }
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSubmit}
            disabled={!formState.isValid}
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
LoginPage.propTypes = {
  history: PropTypes.object,
  isLoggedIn: PropTypes.bool,
  username: PropTypes.string,
};

function mapStateToProps(state) {
  return {
    isLoggedIn: state.auth.isLoggedIn,
    username: state.auth.username,
  }
};

export default connect(mapStateToProps, {})(LoginPage);