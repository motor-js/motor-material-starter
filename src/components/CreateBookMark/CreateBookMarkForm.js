import {Component,React} from 'react';
// material
import { IconButton, Box, FormControl, Stack, Typography, TextField } from '@mui/material';
// material dialog
import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';

class CreateBookMarkForm extends Component {
  constructor() {
    super();
    this.state = {
        bookmarkTitle: '',
        
    };
};

handleSubmit = event => {
  event.preventDefault();
  const userInput = this.state.bookmarkTitle;
  if ((userInput)) {
      this.props.addBookmark(userInput);
      this.setState({
          bookmarkTitle: '',
          
      });
  } 
};

updateInputState = event => {
  this.setState({ bookmarkTitle: event.target.value });
};

  render() {
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
          />

          <TextField
            autoFocus
            margin="dense"
            id="description"
            label="Description"
            type="text"
            fullWidth
            variant="standard"
          />
  
  </>
    

  )
}
}
export default CreateBookMarkForm;