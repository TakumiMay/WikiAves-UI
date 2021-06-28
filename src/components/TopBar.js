import React, { useState } from "react";
import { fade, makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";
import AccountCircle from '@material-ui/icons/AccountCircle';
//import NotificationsIcon from '@material-ui/icons/Notifications';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import SearchIcon from '@material-ui/icons/Search';
import { logout } from '../actions/auth/actionAuth';
import { getBird } from '../actions/actionBirds';
import { useDispatch } from 'react-redux';
import {
    AppBar,
    Button,
    IconButton,
    InputBase,
    Menu,
    MenuItem,
    Toolbar,
    Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
        marginLeft: theme.spacing(3),
      },
    },
    search: {
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
    searchIcon: {
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
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
    },
}));

export default function TopBar() {
    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [ searchBird, setSearchBird ] = useState("");

    const isMenuOpen = Boolean(anchorEl);

    const handleSearch = async(event) => {
      await dispatch(getBird(searchBird));
      history.push("/posts");
    }

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleOpenProfile = async(event) => {
      history.push("/profile");
    }
    // const handleOpenPosts = async(event) => {
    //   history.push("/posts");
    // }
    const handleOpenRanking = async(event) => {
      history.push("/ranking");
    }
    const handleSingOut = async(event) => {
      dispatch(logout());
      localStorage.clear();
      history.push("/");
    }

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        id={menuId}
        keepMounted
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMenuOpen}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleOpenProfile}>Mi perfil</MenuItem>
        <MenuItem onClick={handleSingOut}>Cerrar sesión</MenuItem>
      </Menu>
    );

    return (
    <div className={classes.grow}>
        <AppBar position="relative">
            <Toolbar>
                <Typography className={classes.title} variant="h6" noWrap>
                    WikiAves Icesi
                </Typography>
                <div className={classes.search}>
                    <div className={classes.searchIcon}>
                        <SearchIcon />
                    </div>
                    <InputBase
                        placeholder="Busca una especie"
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                        }}
                        onChange={event => {setSearchBird(event.target.value)}}
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </div>
                <Button
                  type="submit"
                  color="inherit"
                  onClick={handleSearch}
                >
                  Buscar
                </Button>
                <div className={classes.grow} />
                <div className={classes.sectionDesktop}>
                {/* <IconButton aria-label="show 17 new notifications" color="inherit">
                    <Badge badgeContent={17} color="secondary">
                        <NotificationsIcon />
                    </Badge>
                </IconButton> */}
                {/* <Button
                  type="submit"
                  color="inherit"
                  onClick={handleOpenPosts}
                >
                  Explora
                </Button> */}
                <IconButton 
                  aria-label="show 17 new notifications" 
                  color="inherit"
                  onClick={handleOpenRanking}>
                    <PeopleAltIcon />
                </IconButton>
                
                <IconButton
                    edge="end"
                    aria-label="account of current user"
                    aria-controls={menuId}
                    aria-haspopup="true"
                    onClick={handleProfileMenuOpen}
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                </div>
            </Toolbar>
        </AppBar>
        {renderMenu}
    </div>
    );
}