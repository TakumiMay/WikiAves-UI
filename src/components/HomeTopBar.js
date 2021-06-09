import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import messages from "../constants/messages";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
      marginLeft: theme.spacing(3),
    },
  },
  grow: {
    flexGrow: 1,
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
}));

export default function HomeTopBar() {
  const classes = useStyles();
  const history = useHistory();

  const handleLoginButton = async(event) => {
    history.push("/login");
  }

  const handleMenuButton = async(event) => {
    history.push("/underConstructionPage");
  }

  const handleHomeButton = async(event) => {
    history.push("/");
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            WikiAves Icesi
          </Typography>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <Button color="inherit"
              onClick={handleHomeButton}>Inicio</Button>
            <Button color="inherit"
              onClick={handleMenuButton}>Especies</Button>
            <Button color="inherit"
              onClick={handleMenuButton}>Aprende más</Button>
            <Button color="inherit"
              onClick={handleMenuButton}>Acerca de</Button>
            <Button color="inherit"
              onClick={handleLoginButton}>Iniciar Sesión</Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
