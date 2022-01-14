import { useRef, useState, useCallback } from 'react';
// Material
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import Popover from '@mui/material/Popover';
import TextField from '@mui/material/TextField';

import editBookMark from '@iconify/icons-eva/edit-2-fill';
import { Icon } from '@iconify/react';



export default function BookMarkHeader() {
  return (
    <Stack direction="row" spacing={2}>

      <PopupState variant="popover">
        {(popupState) => (
          <div>
            <Button
              sx={{ mx: 0.5 }}
              size="small"
              type="submit"
              color="inherit"
              variant="outlined" {...bindTrigger(popupState)}
              startIcon={<Icon icon={editBookMark} />}>
              Create BookMark
            </Button>
            <Popover
              {...bindPopover(popupState)}
              anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center'}}
              transformOrigin={{
              vertical: 'top',
              horizontal: 'center'}}>
                <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
        <Stack direction="row" spacing={2}>

        <TextField id="outlined-basic" label="Title" variant="outlined" />
  <TextField id="outlined-basic" label="Description" variant="outlined" />
        </Stack>


    </Box>
              
            </Popover>
          </div>
        )}
      </PopupState>
    </Stack>
  );
}