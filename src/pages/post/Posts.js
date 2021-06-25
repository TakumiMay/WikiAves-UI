import React, { useState, useEffect } from "react";
import { fade, makeStyles } from '@material-ui/core/styles';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ImmutablePropTypes from "react-immutable-proptypes";
import TopBar from "../../components/TopBar";
import Footer from "../../components/Footer";
import ExpeditionCard from "../../components/ExpeditionCard";
import FilterListIcon from '@material-ui/icons/FilterList';
import { fetchWithToken } from '../../helpers/fetch';

import { 
    CssBaseline, 
    Grid,
    Button,
    InputBase,
    Typography
  } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: theme.palette.background.default,
      height: "100%",
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
    space: {
        paddingTop: theme.spacing(2),
    }
}));

const Posts = (props) => {
    const classes = useStyles();
    const [ filterRegion, setFilterRegion ] = useState('');
    const { searchedBird, setSearchedBird } = useState("");
    const [ birds, setBirds ] = useState([]);

    const handleSearch = async(event) => {
        expeditionCards = birds && birds.map((bird) => (
            <ExpeditionCard
                bird={bird}
            />
        ));
    }
    const handleFilter = async(event) => {
        console.log(body);
        const response = await fetchWithToken(`posts/birds?search=${filterRegion}`);
        const body = response.json();
        console.log(body);
        // console.log(response.data);
        // response.json().then(
        //     data => setBirds(data)
        // )
        // console.log(birds);
    }

    useEffect(() => {

    }, []);

    const expeditionCards = birds && birds.map((bird) => (
        <ExpeditionCard
            bird={bird}
        />
    ));
    
    return (
        <React.Fragment>
            <CssBaseline />
            <TopBar />
            <Grid
              container
              className={classes.root}
              direction="column"
            >
                <div className={classes.space}></div>
                <Grid 
                    direction="row"
                    justify="flex-start"
                    alignItems="center"
                    container
                >
                    <div className={classes.filter}>
                            <div className={classes.filterIcon}>
                                <FilterListIcon />
                            </div>
                            <InputBase
                                placeholder="Ingresa la región para filtrar... "
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
                            Buscar por región
                        </Button>
                </Grid>
                <Grid 
                    container
                    justify="center"
                >
                    { expeditionCards }
                </Grid>
                <Grid 
                    container
                    justify="center"
                >
                    <Footer /> 
                </Grid>
            </Grid>
        </React.Fragment>
    );
}
const mapStateToProps = (state) => ({
    username: state.username,
});

Posts.propTypes = {
    searchedBird: PropTypes.any,
    birds: ImmutablePropTypes.map.isRequired,
}

export default connect(mapStateToProps)(Posts);
