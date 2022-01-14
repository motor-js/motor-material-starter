import { useRef, useState, useCallback } from 'react';
// icons
import bookmark from '@iconify/icons-eva/bookmark-fill';
import roundClearAll from '@iconify/icons-ic/round-clear-all';
import roundFilterList from '@iconify/icons-ic/round-filter-list';
import { Icon } from '@iconify/react';


// motor
import { useBookmark, useSelections, useButton } from "@motor-js/engine"

// material
import { alpha } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Popover from '@mui/material/Popover';

import {
  List,
  ListSubheader,
  ListItemButton,
  ListItemIcon,
  Collapse,
  ListItemText,
  IconButton,
  Badge,
  Box,
  Button,
  BookMark
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import LockIcon from '@mui/icons-material/Lock';
import DeleteIcon from '@mui/icons-material/Delete';

// create bookmark popover
import Typography from '@mui/material/Typography';




// components
import MenuPopover from '../MenuPopover';


export default function CreateBookMarkForm() {
  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [openSub, setOpenSub] = useState(false);
  const { selections, clearSelections } = useSelections();
  const { bookmarkList, applyBookmark, createBookmark, } = useBookmark()
  const [bookmarkOpen, setBookmarkOpen] = useState(false)

  console.log(selections)

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const handleDelete = () => {
    console.info('You deleted a bookmark');
  };

  const bookmarkHandler = useCallback(() => {
    setBookmarkOpen((prev) => !prev);
  }, [])
  const handleShowCallback = () => setBookmarkOpen((prev) => !prev);
  const handleBookmarkSelect = (d) => applyBookmark(d.id)


  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off">
      <Stack direction="row" spacing={2}>
        <TextField id="outlined-basic" label="Title" variant="outlined" />
        <TextField id="outlined-basic" label="Description" variant="outlined" />
      </Stack>

    </Box>

  )
}