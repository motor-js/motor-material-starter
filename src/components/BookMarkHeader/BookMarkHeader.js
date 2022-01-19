import * as React from 'react';
// Material
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import editBookMark from '@iconify/icons-eva/edit-2-fill';
import { Icon } from '@iconify/react';
import { FormControl,TextField } from '@mui/material';

// motor
import { useBookmark,useSelections,useButton } from "@motor-js/engine"
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CreateBookMarkForm from '../CreateBookMark'

export default function BookMarkHeader() {
  const [open, setOpen] = React.useState(false);
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState('sm');
  const {bookmarkList,applyBookmark,createBookmark,} = useBookmark()


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <Stack direction="row" spacing={2}>
      <Button
        sx={{ mx: 0.5 }}
        size="small"
        color="inherit"
        variant="outlined"
        onClick={handleClickOpen}
        startIcon={<Icon icon={editBookMark} />}>
        Create BookMark
      </Button>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          fullWidth={fullWidth}
          maxWidth={maxWidth}
        >
          < CreateBookMarkForm/>
         
          <DialogActions>
            <Button onClick={applyBookmark}>Save</Button>
            <Button autoFocus onClick={handleClose}>
            Close
          </Button>
          </DialogActions>
        </Dialog>
   
    </Stack>
  );
}