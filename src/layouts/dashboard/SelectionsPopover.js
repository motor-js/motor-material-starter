import { Icon } from '@iconify/react';
import { useRef, useState } from 'react';
// icons
import bellFill from '@iconify/icons-eva/bell-fill';
// motor
import { useSelections, useButton } from '@motor-js/engine'
// material
import { alpha } from '@mui/material/styles';
import { List, ListSubheader, ListItemButton, ListItemIcon, Collapse, ListItemText, IconButton } from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
// components
import MenuPopover from '../../components/MenuPopover';


export default function SelectionsPopover() {
  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [openSub, setOpenSub] = useState(false);

  const { selections, clearSelections } = useSelections();

  console.log(selections)

  const handleOpen = () => {
    setOpen(true);
  };
  
  const handleClose = () => {
    setOpen(false);
  };

  const handleClick = () => {
    setOpenSub(!openSub);
  };

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
        <Icon icon={bellFill} width={20} height={20} />
      </IconButton>
      <MenuPopover
        open={open}
        onClose={handleClose}
        anchorEl={anchorRef.current}
        sx={{ width: 220 }}
      >
        <List
          sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              Current Selections
            </ListSubheader>
          }
        >
           {selections && selections.length > 0 && (
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText primary="Starred" />
                </ListItemButton>
              </List>
            </Collapse>
           )}
        </List>
      </MenuPopover>
    </>
  )
}

