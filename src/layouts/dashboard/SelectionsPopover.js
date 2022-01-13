import { Icon } from '@iconify/react';
import { useRef, useState } from 'react';
// icons
import bellFill from '@iconify/icons-eva/bell-fill';
import roundClearAll from '@iconify/icons-ic/round-clear-all';
import baselineRedo from '@iconify/icons-ic/baseline-redo';
import baselineUndo from '@iconify/icons-ic/baseline-undo';
import baselineLock from '@iconify/icons-ic/baseline-lock';
import baselineLockOpen from '@iconify/icons-ic/baseline-lock-open';
// motor
import { useSelections, useButton } from '@motor-js/engine'
// material
import { alpha } from '@mui/material/styles';
import { 
  List,
  ListSubheader,
  ListItem,
  ListItemIcon,
  Collapse,
  ListItemText,
  IconButton,
  Badge,
  Box, 
  Button
} from '@mui/material';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import LockIcon from '@mui/icons-material/Lock';
import ClearIcon from '@mui/icons-material/Clear';
// components
import MenuPopover from '../../components/MenuPopover';


export default function SelectionsPopover() {
  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);

  const { selections, clearSelections, lockAll, unlockAll } = useSelections();
  const { 
    lockField,
    unlockField,
    nextSelection,
    previousSelection 
  } = useButton();
 
  const handleOpen = () => {
    setOpen(true);
  };
  
  const handleClose = () => {
    setOpen(false);
  };

  const handleClearSelections = () => {
    clearSelections()
  }

  const handleClear = (field) => {
    clearSelections(field)
  }

  const handleNextSelection = () => {
    nextSelection()
  }

  const handlePrevSelection = () => {
    previousSelection()
  }

  const handleLock = (s) => ( s.qLocked === true ? unlockField(s.qField) : lockField(s.qField) )

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
        <Badge badgeContent={selections && selections.length} color="primary">
          <Icon icon={bellFill} width={20} height={20} />
        </Badge>
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
           {selections && selections.length > 0 ?
           selections.map((sel,i) => (
              <Collapse key={i} in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding sx={{ display: 'flex', flexDirection: 'row' }}>
                  <ListItem sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <Badge badgeContent={sel.qSelectedFieldSelectionInfo.length} color="error" />
                    </ListItemIcon>
                    <ListItemText primary={sel.qField} secondary={sel.qSelected}/>
                  </ListItem>
                  {sel.qLocked === true ?  
                    <>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <IconButton onClick={() => handleLock(sel)} >
                          <LockIcon fontSize="small" />
                        </IconButton>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', mr: 2 }}>
                        <IconButton onClick={() => handleClear(sel.qField)} disabled>
                          <ClearIcon fontSize="small" />
                        </IconButton>
                      </Box>
                    </>
                    :
                    <>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <IconButton onClick={() => handleLock(sel)} >
                          <LockOpenIcon fontSize="small" />
                        </IconButton>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', mr: 2 }}>
                        <IconButton onClick={() => handleClear(sel.qField)}>
                          <ClearIcon fontSize="small" />
                        </IconButton>
                      </Box>
                    </>
                  }           
                </List>
              </Collapse>
            )
           ) : 
              <Box>
                <ListItemText sx={{ display: 'flex', justifyContent: 'center' }}>Nothing selected yet</ListItemText>
              </Box>
            }
            <Box sx={{ p: 3}}>
            <Box sx={{ py: 1, display: 'flex', justifyContent: 'flex-start' }}>
              <Button
                sx={{ mx: 0.5 }}
                size="small"
                type="submit"
                color="inherit"
                variant="outlined"
                onClick={handleClearSelections}
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
                onClick={handleNextSelection}
                startIcon={<Icon icon={baselineRedo} />}
              >
                Redo
              </Button>
              <Button
                sx={{ mx: 0.5 }}
                size="small"
                type="submit"
                color="inherit"
                variant="outlined"
                onClick={handlePrevSelection}
                startIcon={<Icon icon={baselineUndo} />}
              >
                Undo
              </Button>
            </Box>
            <Box>
              <Button
                sx={{ mx: 0.5 }}
                size="small"
                type="submit"
                color="inherit"
                variant="outlined"
                onClick={lockAll}
                startIcon={<Icon icon={baselineLock} />}
              >
                Lock All
              </Button>
              <Button
                sx={{ mx: 0.5 }}
                size="small"
                type="submit"
                color="inherit"
                variant="outlined"
                onClick={unlockAll}
                startIcon={<Icon icon={baselineLockOpen} />}
              >
                Unlock All
              </Button>
            </Box>
          </Box>
        </List>
      </MenuPopover>
    </>
  )
}

