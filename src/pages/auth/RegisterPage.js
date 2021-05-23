import React, { useState } from "react";
import { connect } from "react-redux";
import { makeStyles } from '@material-ui/styles';
import { useHistory } from "react-router-dom";
import CssBaseline from '@material-ui/core/CssBaseline';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PermMediaIcon from '@material-ui/icons/PermMedia';
import Footer from "../../components/Footer";
import axios from 'axios';
import {
    Container,
    Grid,
    Button,
    TextField,
    Typography,
    InputLabel,
    Avatar,
    Link,
} from '@material-ui/core';
import { Label } from "reactstrap";

const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
}));

export default function SignUp() {
    const state = {
        selectedFile: null
    }
    const classes = useStyles();
    const history = useHistory();

    const handleFileSelected = event => {
        this.setState({
            selectedFile: event.target.files[0]
        })
    }

    const handleLoginButton = async(event) => {
        history.push("/login");
    }

    const handleSubmit = async(event) => {
        event.preventDefault();
    }

    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <AccountCircleIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Registrarse
          </Typography>
          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="Nombre completo"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label="Nombre de usuario"
                  name="lastName"
                  autoComplete="nname"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Correo electrónico"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Contraseña"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="region"
                  label="Región"
                  name="region"
                  autoComplete="region"
                />
              </Grid>
              <Grid item xs={12}>
                <InputLabel
                  variant="outlined"
                  required
                  fullWidth
                >
                  <PermMediaIcon/> Agregar foto <input type="file" onChange={handleFileSelected} />
                </InputLabel>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={handleSubmit}
            >
              Crear cuenta
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link onClick={handleLoginButton} variant="body2">
                  ¿Ya tienes una cuenta? Inicia sesión
                </Link>
              </Grid>
            </Grid>
          </form>
          <div>
              <label></label>
          </div>
          <footer className={classes.footer}>
            <Footer />
          </footer>
        </div>
      </Container>
    );
}
