import { useState, useEffect } from 'react';
// @mui
import { styled } from '@mui/material/styles';
import { Box, ListItemText, ListItemButton } from '@mui/material';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';
// motor
import { useSearch } from "@motor-js/engine"
// utils
import cssStyles from '../../utils/cssStyles';
// components
import Iconify from '../../components/Iconify';
import { IconButtonAnimate } from '../../components/animate';

// ----------------------------------------------------------------------

const APPBAR_MOBILE = 64;
const APPBAR_DESKTOP = 92;

const SearchbarStyle = styled('div')(({ theme }) => ({
  ...cssStyles(theme).bgBlur(),
  top: 0,
  left: 0,
  zIndex: 99,
  width: '100%',
  display: 'flex',
  position: 'absolute',
  alignItems: 'center',
  height: APPBAR_MOBILE,
  padding: theme.spacing(0, 3),
  boxShadow: theme.customShadows.z8,
  [theme.breakpoints.up('md')]: {
    height: APPBAR_DESKTOP,
    padding: theme.spacing(0, 5),
  },
}));

// ----------------------------------------------------------------------

export default function Searchbar() {
  const [searchValue, setSearchValue] = useState("");
  const qCount = 100;
  const qGroupItemCount = 100;

  const {
    flatResults,
    flatSelect,
  } = useSearch({
    searchValue,
    qCount,
    qGroupItemCount
  })


  const handleSearch = (value) => (
    setSearchValue(value)
  )

  const handleChange = (e, val) => {
    console.log(e)
    console.log(val)
    
    // flatSelect(dim, val)
  };

  const searchValues = {
    options: flatResults,
    getOptionLabel: (option) => option.value,
  };


// ----------------------------------------------------------------------
  return (
    <>
      <Box sx={{ width: '250px', mr: '8px' }}>
        <Autocomplete
          {...searchValues}
          renderOption={(props, opt) => (
            <li style={{ fontSize: '14px' }} {...props} key={props.id} component="li" >
              {opt.value}
            </li>
          )}
          size="small"
          fullWidth
          freeSolo
          onChange={(e, value) => handleChange(e.target, value)}
          renderInput={(params) => (
            <TextField {...params} label="Search.."
              onChange={(e) => handleSearch(e.target.value)} />
          )}
        />
      </Box>
    </>
  );
}
