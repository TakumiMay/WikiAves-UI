import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

import { fetchWithToken } from '../helpers/fetch';

const useStyles = makeStyles((theme) => ({
formControlLabel: {
    marginTop: theme.spacing(1),
  },
}));
export default function AddExpeditionDialog({ isDialogOpened, handleCloseDialog }) {
    const classes = useStyles();
    const [isEating, setIsEating] = React.useState(false);
    const [isFlying, setIsFlying] = React.useState(false);
    const [isPreening, setIsPreening] = React.useState(false);
    const [isMating, setIsMating] = React.useState(false);

    const handleIsEatingChange = (event) => {
        setIsEating(event.target.checked);
      };
      const handleIsFlyingChange = (event) => {
        setIsFlying(event.target.checked);
      };
      const handleIsPreeningChange = (event) => {
        setIsPreening(event.target.checked);
      };
      const handleIsMatingChange = (event) => {
        setIsMating(event.target.checked);
      };

  const handleClose = () => {
    handleCloseDialog(false);
  };

  const [formState, setFormState] = useState({ values: {} });
  const handleChange = (event) => {
    event.persist();
    setFormState((formState) => ({
      ...formState,
      values: {
        ...formState.values,
        [event.target.name]: event.target.value,
      },
    }));
  }

  const handleAdd = () => {
    console.log("Agregamdo");
    async function loadedUsers(){
        // const response = await fetchWithToken(`posts/expedition/add`, 
        //     {
        //         formState.values.name,
        //         formState.values.description,
        //         formState.values.date,
        //         formState.values.city,
        //         formState.values.region,
        //         localStorage.getItem("username")    
        //     }, 
        //     'POST');
        // response.json().then(
        //     data =>  console.log(data)
        // )
        
        
    }
    loadedUsers();
  };

  return (
    <div>
      {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open form dialog
      </Button> */}
      <Dialog open={isDialogOpened} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Agregar expedición</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Para agregar una expedición llena la siguiente información:
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Nombre de la expedición"
            fullWidth
            onChange={handleChange}
            value={formState.values.name || ""}
          />
          <TextField
            autoFocus
            margin="dense"
            id="description"
            label="Descripción"
            fullWidth
            onChange={handleChange}
            value={formState.values.description || ""}
          />
          <TextField
            autoFocus
            margin="dense"
            id="date"
            label="Fecha (dd/mm/aaaa)"
            fullWidth
            onChange={handleChange}
            value={formState.values.date || ""}
          />
          <TextField
            autoFocus
            margin="dense"
            id="city"
            label="Ciudad"
            fullWidth
            onChange={handleChange}
            value={formState.values.city || ""}
          />
          <TextField
            autoFocus
            margin="dense"
            id="region"
            label="Región"
            fullWidth
            onChange={handleChange}
            value={formState.values.region || ""}
          />
          <DialogTitle id="form-dialog-title">Información del ave avistada</DialogTitle>
          <TextField
            autoFocus
            margin="dense"
            id="common_name"
            label="Nombre común"
            fullWidth
            onChange={handleChange}
            value={formState.values.common_name || ""}
          />
          <TextField
            autoFocus
            margin="dense"
            id="scientific_name"
            label="Nombre científico"
            fullWidth
            onChange={handleChange}
            value={formState.values.scientific_name || ""}
          />
          <FormControlLabel
              className={classes.formControlLabel}
              control={<Switch checked={isEating} onChange={handleIsEatingChange} />}
              label="Comiendo"
          />
          <FormControlLabel
              className={classes.formControlLabel}
              control={<Switch checked={isFlying} onChange={handleIsFlyingChange} />}
              label="Volando"
          />
          <FormControlLabel
              className={classes.formControlLabel}
              control={<Switch checked={isPreening} onChange={handleIsPreeningChange} />}
              label="Acicalándose"
          />
          <FormControlLabel
              className={classes.formControlLabel}
              control={<Switch checked={isMating} onChange={handleIsMatingChange} />}
              label="Apareamiento"
          />
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button onClick={handleClose} color="primary">
            Agregar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
