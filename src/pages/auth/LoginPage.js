/* eslint-disable no-unused-vars*/
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { connect } from "react-redux";
import { makeStyles } from '@material-ui/styles';
import LoginCarousel from '../../components/LoginCarousel';

import {
    Grid,
    Button,
    TextField,
    Typography,
    FormControlLabel
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: theme.palette.background.default,
      height: "100%",
    },
    grid: {
      height: "100%",
    },
    content: {
      height: '100%',
      display: 'flex',
      alignItems: 'auto',
    },
    contentHeader: {
      display: 'flex',
      alignItems: 'center',
      paddingTop: theme.spacing(5),
      paddingBottom: theme.spacing(2),
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2)
    },
    contentBody: {
      flexGrow: 1,
      display: 'flex',
      alignItems: 'center',
      [theme.breakpoints.down('md')]: {
        justifyContent: 'auto'
      }
    },
    form: {
      margin: 'auto',
      paddingLeft: 100,
      paddingRight: 100,
      paddingBottom: 125,
      flexBasis: 700,
      [theme.breakpoints.down('sm')]: {
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
      }
    },
    title: {
      marginTop: theme.spacing(3),
    },
    sugestion: {
      marginTop: theme.spacing(2),
    },
    textField: {
      marginTop: theme.spacing(2),
    },
    signInButton: {
      margin: theme.spacing(1, 0),
    },
  }));

const LoginPage = (props) => {
    const classes = useStyles();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  const handleSubmit = async(event) => {
    event.preventDefault();
  }
  //const imags = {
  //    currentImg: '/assets/images/bird1.jpg'
  //}

  return (
    <div className="Login">
        <Grid
            className={classes.grid}
            container
        >
            <Grid
                className={classes.content}
                direction="row"
                justify="flex-start"
                alignItems="center"
                container
            >
                <Grid item
                    xs={6}
                >
                    <LoginCarousel>

                    </LoginCarousel>
                </Grid>
                <Grid item
                    xs={6}
                >
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button block size="lg" type="submit" disabled={!validateForm()}>
          Login
        </Button>
      </Form>
      </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
const mapStateToProps = (state) => ({
});

export default connect(mapStateToProps)(LoginPage);