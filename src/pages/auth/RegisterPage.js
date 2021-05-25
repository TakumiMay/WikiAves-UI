import React, { useState } from "react";
import { connect } from "react-redux";
import { makeStyles } from '@material-ui/styles';
import { useHistory } from "react-router-dom";
import CssBaseline from '@material-ui/core/CssBaseline';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";
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
    Fab,
    Link,
} from '@material-ui/core';

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
    input: {
        display: "none"
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
}));

export default function SignUp() {
    const state = {
        mainState: "initial", // initial, search, gallery, uploaded
        imageUploaded: 0,
        selectedFile: null
    };
    const classes = useStyles();
    const history = useHistory();

    const handleUploadClick = event => {
        console.log();
        var file = event.target.files[0];
        const reader = new FileReader();
        var url = reader.readAsDataURL(file);
    
        reader.onloadend = function(e) {
          this.setState({
            selectedFile: [reader.result]
          });
        }.bind(this);
        console.log(url); // Would see a path?
    
        this.setState({
          mainState: "uploaded",
          selectedFile: event.target.files[0],
          imageUploaded: 1
        });
      };

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
              <Grid item xs={12} sm={6}>
                <InputLabel
                  variant="outlined"
                  fullWidth
                >
                  Agregar foto
                </InputLabel>
              </Grid>
              <Grid item xs={12} sm={6}>
                <input
                    accept="image/*"
                    className={classes.input}
                    id="contained-button-file"
                    multiple
                    type="file"
                    onChange={handleUploadClick}
                />
                <label htmlFor="contained-button-file">
                <Fab component="span" className={classes.button}>
                    <AddPhotoAlternateIcon />
                </Fab>
                </label>
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
              <label></label>
          </div>
          <footer className={classes.footer}>
            <Footer />
          </footer>
        </div>
      </Container>
    );
}
