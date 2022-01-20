import React, { useState,useCallback,useRef } from "react";
// icons
import bookmark from '@iconify/icons-eva/bookmark-fill';
import roundClearAll from '@iconify/icons-ic/round-clear-all';
import roundFilterList from '@iconify/icons-ic/round-filter-list';
import { Icon } from '@iconify/react';

// motor
import { useBookmark,useSelections,useButton } from "@motor-js/engine"

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
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import BookMark from '@mui/icons-material/Bookmark';
import DeleteIcon from '@mui/icons-material/Delete';
import Typography from '@mui/material/Typography';
// bookmark components
import BookMarkHeader from '../../../components/BookMarkHeader';
// components
import MenuPopover from '../../../components/MenuPopover';


export default function BookMarkPopover() {
  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [openSub, setOpenSub] = useState(false);
  const {
    bookmarks, 
    bookmarkList,
    appliedBookmark, 
    bookmarkInfo, 
    applyBookmark,
    createBookmark,
    destroyBookmark,
    getBookmark,
    getBookmarkLayout,
    updateBookmark,
    clearBookmarks,
    error
} = useBookmark();
const [bookmarkOpen, setBookmarkOpen] = useState(false)

  console.log(bookmarks)

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
    },[])
  const handleShowCallback = () => setBookmarkOpen((prev) => !prev);
  const handleBookmarkSelect = (d) => applyBookmark(d.id)
  const handleClearBookMarks = () => {
    clearBookmarks()
  }


  return (
    <>
      <IconButton
        ref={anchorRef}
        onClick={handleOpen}
        sx={{
          padding: 0,
          width: 44,
          height: 44,
          ...(open && {
            '&:before': {
              zIndex: 1,
              content: "''",
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              position: 'absolute',
              bgcolor: (theme) => alpha(theme.palette.grey[900], 0.72)
            }
          })
        }}
      >
        <Icon icon={bookmark} width={20} height={20} />
      </IconButton>
      {bookmarkList && (
      <MenuPopover
        open={open}
        onClose={handleClose}
        anchorEl={anchorRef.current}
        sx={{ width: 460 }}>

        <List
          sx={{ width: '100%', maxWidth: 460, bgcolor: 'background.paper' }}
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              BookMarks
            </ListSubheader>
          }
        >

{bookmarkList.map((row, id) => (
             
                <List component="div" disablePadding sx={{ display: 'flex', flexDirection: 'row' }}>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <Badge color="error" />
                    </ListItemIcon>
                    <ListItemText  />
                    <KeyboardArrowDownIcon sx={{ ml: 'auto' }} fontSize="small" />
                  </ListItemButton>
                  <IconButton>
                    <BookMark fontSize="small" />
                  </IconButton>
                  <IconButton>
                    <DeleteIcon onClick={clearBookmarks} fontSize="small" sx={{ mr: 2 }} />
                  </IconButton>
                </List>
         
))}
          <Box
            component="form"
            sx={{
              '& > :not(style)': { p: 3, display: 'flex', justifyContent: 'flex-start' }
            }}
            noValidate
            autoComplete="on">
            <BookMarkHeader />
           
          </Box>
          <Box sx={{ p: 3, display: 'flex', justifyContent: 'flex-start' }}>

            <Button
              sx={{ mx: 0.5 }}
              size="small"
              type="submit"
              color="inherit"
              variant="outlined"
              onClick={clearBookmarks}
              startIcon={<Icon icon={roundClearAll} />}>
              Clear BookMarks
            </Button>
            <Button
              sx={{ mx: 0.5 }}
              size="small"
              type="submit"
              color="inherit"
              variant="outlined"
              onClick={'onResetFilter'}
              startIcon={<Icon icon={roundClearAll} />}>
              Undo
            </Button>
          </Box>
        </List>
      </MenuPopover>
         )}
    </>
  )
}