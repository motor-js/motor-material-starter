import {Component,React,useState} from 'react';
// material
import { IconButton, Box, FormControl, Stack, Typography, TextField } from '@mui/material';
// material dialog
import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';

const CreateBookMarkForm = ({ show, createBookmark, showCallback }) => {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const handleCancel = () => showCallback()
  const handleCreate = () => {
    createBookmark(title,description) 
    showCallback()
  }

  const handleTitle = (e) => setTitle(e.target.value)
  
  const handleDescription = (e) => setDescription(e.target.value)
  // const handleClose = () => {
  //   setOpen(false);
  // };

  return (
  <>
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
           <Button color="primary" onClick={handleCreate}>Create</Button>
            {/* <Button autoFocus onClick={handleClose} >Close</Button> */}
  
  </>
    

  )
}
export default CreateBookMarkForm;