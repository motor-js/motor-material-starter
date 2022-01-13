import { Icon } from '@iconify/react';
import { useRef, useState } from 'react';
// icons
import bookmark from '@iconify/icons-eva/bookmark-fill';
import roundClearAll from '@iconify/icons-ic/round-clear-all';
import roundFilterList from '@iconify/icons-ic/round-filter-list';
// motor
import { useSelections, useButton } from '@motor-js/engine'
// material
import { alpha } from '@mui/material/styles';
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
        <Icon icon={bookmark} width={20} height={20} />
      </IconButton>
      <MenuPopover
        open={open}
        onClose={handleClose}
        anchorEl={anchorRef.current}
        sx={{ width: 460 }}
      >
        <List
          sx={{ width: '100%', maxWidth: 460, bgcolor: 'background.paper' }}
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              Current Selections
            </ListSubheader>
          }
        >
           {selections && selections.length > 0 && 
           selections.map((sel,i) => (
              <Collapse key={i} in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding sx={{ display: 'flex', flexDirection: 'row' }}>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <Badge badgeContent={sel.qSelectedFieldSelectionInfo.length} color="error" />
                    </ListItemIcon>
                    <ListItemText primary={sel.qField}/>
                    <KeyboardArrowDownIcon sx={{ ml: 'auto' }} fontSize="small" />
                  </ListItemButton>
                  <IconButton>
                    <LockIcon fontSize="small" />
                  </IconButton>
                  <IconButton>
                    <DeleteIcon fontSize="small" sx={{ mr: 2 }} />
                  </IconButton>
                </List>
              </Collapse>
            )
           )}
          <Box sx={{ p: 3, display: 'flex', justifyContent: 'flex-start' }}>
            <Button
              sx={{ mx: 0.5 }}
              size="small"
              type="submit"
              color="inherit"
              variant="outlined"
              onClick={'onResetFilter'}
              startIcon={<Icon icon={roundClearAll} />}
            >
              Clear Selections
            </Button>
            <Button
              sx={{ mx: 0.5 }}
              size="small"
              type="submit"
              color="inherit"
              variant="outlined"
              onClick={'onResetFilter'}
              startIcon={<Icon icon={roundClearAll} />}
            >
              Redo
            </Button>
            <Button
              sx={{ mx: 0.5 }}
              size="small"
              type="submit"
              color="inherit"
              variant="outlined"
              onClick={'onResetFilter'}
              startIcon={<Icon icon={roundClearAll} />}
            >
              Undo
            </Button>
          </Box>
        </List>
      </MenuPopover>
    </>
  )
}

