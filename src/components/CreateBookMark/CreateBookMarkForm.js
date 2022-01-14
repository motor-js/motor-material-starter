
// material
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import {
  IconButton,
  Box,
} from '@mui/material';

export default function CreateBookMarkForm() {
  return (
    <Box
      component="form"
      sx={{'& > :not(style)': { m: 1, width: '25ch' }}}
      noValidate
      autoComplete="off">
      <Stack direction="row" spacing={2}>
        <TextField id="outlined-basic" label="Title" variant="outlined" />
        <TextField id="outlined-basic" label="Description" variant="outlined" />
      </Stack>

    </Box>

  )
}