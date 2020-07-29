import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DeleteIcon from '@material-ui/icons/Delete';

import { useDispatch } from 'react-redux';
import { eliminarRequisito } from "../../requisitosDuck";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function EliminarRequisito(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const {id} = props;

  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = () => {
    dispatch(eliminarRequisito(id));
    setOpen(false);
  };

  return (
    <div>
      <IconButton aria-label="eliminar" variant="contained" color = "secondary" onClick={handleClickOpen}>
        <DeleteIcon/>
      </IconButton>

      <Dialog disableBackdropClick disableEscapeKeyDown open={open} onClose={handleClose}>
        <DialogTitle>Eliminar Requisito</DialogTitle>
        <DialogContent>
            ¿Seguro que desea eliminar este Requisito?
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button onClick={handleDelete} color="secondary">
            Eliminar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
