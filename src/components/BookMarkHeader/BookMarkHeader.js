import { useRef, useState, useCallback } from 'react';
// Material
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import Popover from '@mui/material/Popover';


import addBookMark from '@iconify/icons-eva/file-add-fill';
import editBookMark from '@iconify/icons-eva/edit-2-fill';
import roundClearAll from '@iconify/icons-ic/round-clear-all';
import roundFilterList from '@iconify/icons-ic/round-filter-list';
import { Icon } from '@iconify/react';
import CreateBookMark from '../CreateBookMark';


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
              <Typography sx={{ p: 2 }}>Create BookMark Form</Typography>
            </Popover>
          </div>
        )}
      </PopupState>
    </Stack>
  );
}