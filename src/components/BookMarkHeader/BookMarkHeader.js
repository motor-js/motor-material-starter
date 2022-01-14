
// Material
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import Popover from '@mui/material/Popover';


import editBookMark from '@iconify/icons-eva/edit-2-fill';
import { Icon } from '@iconify/react';
import CreateBookMarkForm from '../CreateBookMark'



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
              < CreateBookMarkForm />
 
              
            </Popover>
          </div>
        )}
      </PopupState>
    </Stack>
  );
}