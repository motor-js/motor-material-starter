
// material
import { IconButton, Box, FormControl, Stack, Typography, TextField } from '@mui/material';
// material dialog
import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function CreateBookMarkForm() {
  return (
    <Box>
      <DialogTitle id="alert-dialog-title">
        Create New BookMark
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          <FormControl>
            <Stack direction="column" spacing={2}>
              <TextField id="outlined-basic" label="Title" variant="outlined" />
              <TextField id="outlined-basic" label="Description" variant="outlined" />
            </Stack>
          </FormControl>
        </DialogContentText>
      </DialogContent>
    </Box>




  )
}