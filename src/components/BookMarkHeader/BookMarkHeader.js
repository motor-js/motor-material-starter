import {React,useState} from 'react';
// Material
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import editBookMark from '@iconify/icons-eva/edit-2-fill';
import { Icon } from '@iconify/react';
import { FormControl,TextField } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';

// motor
import { useBookmark,useSelections,useButton } from "@motor-js/engine"
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CreateBookMarkForm from '../CreateBookMark'

const BookMarkHeader =  ({ anchorEl,showCallback }) => {
  const [open, setOpen] = useState(false);
  const [fullWidth, setFullWidth] = useState(true);
  const [maxWidth, setMaxWidth] = useState('sm');
  const handleCancel = () => showCallback();

  const {bookmarkList,applyBookmark,createBookmark,
    bookmarks,
    getBookmark,
    updateBookmark,
    destroyBookmark} = useBookmark();
  const [bookmarkId, setBookmarkId] = useState("");
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  const handleTitle = (e) => setTitle(e.target.value)
  const handleDescription = (e) => setDescription(e.target.value)
  const handleCreate = () => {
    createBookmark(title,description) 
    showCallback()
  };

  const deleteBookmark = async (e, id) => {
  const destroyed = await destroyBookmark(id);
  };
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
{/* .........................bookmark dialog */}
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          fullWidth={fullWidth}
          maxWidth={maxWidth}>
{/* .........................dialog form fields */}           
          <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Title"
            type="text"
            fullWidth
            variant="standard"
            onChange={handleTitle}
            placeholder="Title"
          />
          <TextField
            autoFocus
            margin="dense"
            id="description"
            label="Description"
            type="text"
            fullWidth
            variant="standard"
            onChange={handleDescription}
            placeholder="Description"
          />
          </DialogContent>

          <DialogActions>
            <Button onClick={handleCreate}>Save</Button>
            <Button autoFocus onClick={handleClose}>Close</Button>
          </DialogActions>
        </Dialog>
  
    </Stack>
  );
}
export default BookMarkHeader;