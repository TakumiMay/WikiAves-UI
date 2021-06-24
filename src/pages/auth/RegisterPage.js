import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/styles';
import { useHistory } from "react-router-dom";
import CssBaseline from '@material-ui/core/CssBaseline';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";
import validate from 'validate.js';
import Footer from "../../components/Footer";
import { register } from '../../actions/auth/actionRegister';
import {
    Container,
    Grid,
    Button,
    TextField,
    Typography,
    Avatar,
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
    footer: {
      padding: theme.spacing(6),
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
    const dispatch = useDispatch();

    const handleUploadClick = event => {
        var file = event.target.files[0];
        const reader = new FileReader();
        var url = reader.readAsDataURL(file);
    
        reader.onloadend = function(e) {
          this.setState({
            selectedFile: [reader.result]
          });
        }.bind(this);
    
        this.setState({
          mainState: "uploaded",
          selectedFile: event.target.files[0],
          imageUploaded: 1
        });
      };

    const handleLoginButton = async(event) => {
        history.push("/login");
    }

    const schema = {
      password: {
        presence: { allowEmpty: false, message: "es requerido" },
        length: {
          minimum: 2,
          maximum: 64,
          message: "longitud no adecuada",
        },
      },
      name: {
        presence: { allowEmpty: false, message: "es requerido" },
        length: {
          maximum: 64,
        },
      },
      last_names: {
        presence: { allowEmpty: false, message: "es requerido" },
        length: {
          maximum: 64,
        },
      },
      username: {
        presence: { allowEmpty: false, message: "es requerido" },
        length: {
          maximum: 64,
        },
      },
      email: {
        presence: { allowEmpty: false, message: "es requerido" },
        length: {
          maximum: 64,
        },
      },
      city: {
        presence: { allowEmpty: false, message: "es requerido" },
        length: {
          maximum: 64,
        },
      },
      region: {
        presence: { allowEmpty: false, message: "es requerido" },
        length: {
          maximum: 64,
        },
      },
    };
    const [formState, setFormState] = useState({
      isValid: false,
      values: {},
      touched: {},
      errors: {},
    });

    useEffect(() => {
      const errors = validate(formState.values, schema);
      setFormState((formState) => ({
        ...formState,
        isValid: errors ? false : true,
        errors: errors || {},
      }));
    }, [formState.values]);
    const handleChange = (event) => {
      event.persist();
  
      setFormState((formState) => ({
        ...formState,
        values: {
          ...formState.values,
          [event.target.name]: event.target.value,
        },
        touched: {
          ...formState.touched,
          [event.target.name]: true,
        },
      }));
    };
    const hasError = (field) => 
    formState.touched[field] && formState.errors[field] ? true : false;

    const handleSubmit = async(event) => {
        dispatch(register(formState.values.password, formState.values.name, 
          formState.values.last_names, formState.values.username, formState.values.email,
          formState.values.city, formState.values.region, 0, 0))
        event.preventDefault();
        history.push("/login")
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
                  autoComplete="name"
                  name="name"
                  variant="outlined"
                  required
                  fullWidth
                  id="name"
                  label="Nombres"
                  autoFocus
                  onChange={handleChange}
                  value={formState.values.name || ""}
                  error={hasError("name")}
                  helperText={
                    hasError("name") ? "El nombre es requerido" : null
                  }
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="last_names"
                  label="Apellidos"
                  name="last_names"
                  autoComplete="last_names"
                  onChange={handleChange}
                  value={formState.values.last_names || ""}
                  error={hasError("last_names")}
                  helperText={
                    hasError("last_names") ? "El apellido es requerido" : null
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="username"
                  label="Nombre de usuario"
                  name="username"
                  autoComplete="username"
                  onChange={handleChange}
                  value={formState.values.username || ""}
                  error={hasError("username")}
                  helperText={
                    hasError("username") ? "El nombre de usuario es requerido" : null
                  }
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
                  onChange={handleChange}
                  value={formState.values.email || ""}
                  error={hasError("email")}
                  helperText={
                    hasError("email") ? "El email es requerido" : null
                  }
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
                  onChange={handleChange}
                  value={formState.values.password || ""}
                  error={hasError("password")}
                  helperText={
                    hasError("password") ? "La contraseña es requerida" : null
                  }
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="region"
                  label="Región"
                  name="region"
                  autoComplete="region"
                  onChange={handleChange}
                  value={formState.values.region || ""}
                  error={hasError("region")}
                  helperText={
                    hasError("region") ? "La region es requerida" : null
                  }
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="city"
                  label="Ciudad"
                  name="city"
                  autoComplete="city"
                  onChange={handleChange}
                  value={formState.values.city || ""}
                  error={hasError("city")}
                  helperText={
                    hasError("city") ? "La ciudad es requerida" : null
                  }
                />
              </Grid>
              {/* <Grid item xs={12} sm={6}>
                <InputLabel
                  variant="outlined"
                  fullWidth
                >
                  Agregar foto
                </InputLabel>
              </Grid> */}
              {/* <Grid item xs={12} sm={6}>
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
              </Grid> */}
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={handleSubmit}
              disabled={!formState.isValid}
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
