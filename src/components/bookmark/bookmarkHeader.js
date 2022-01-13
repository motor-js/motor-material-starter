import * as React from 'react';
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

import addBookMark from '@iconify/icons-eva/file-add-fill';
import editBookMark from '@iconify/icons-eva/edit-2-fill';
import roundClearAll from '@iconify/icons-ic/round-clear-all';
import roundFilterList from '@iconify/icons-ic/round-filter-list';
import { Icon } from '@iconify/react';

export default function BookMarkHeader() {
  return (
    <Stack direction="row" spacing={2}>
              <Button
              sx={{ mx: 0.5 }}
              size="small"
              type="submit"
              color="inherit"
              variant="outlined"
              onClick={'onResetFilter'}
              startIcon={<Icon icon={addBookMark} />}
            >
             Create New BookMark
            </Button>
            <Button
              sx={{ mx: 0.5 }}
              size="small"
              type="submit"
              color="inherit"
              variant="outlined"
              onClick={'onResetFilter'}
              startIcon={<Icon icon={editBookMark} />}
            >
            Edit
            </Button>
            <Button
              sx={{ mx: 0.5 }}
              size="small"
              type="submit"
              color="inherit"
              variant="outlined"
              onClick={'onResetFilter'}
              startIcon={<Icon icon={editBookMark} />}
            >
            Edit
            </Button>
    </Stack>

  );
}