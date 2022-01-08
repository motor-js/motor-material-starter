import { useState,useEffect } from 'react';
// @mui
import { styled } from '@mui/material/styles';
import { Input, Slide, Button, InputAdornment, ClickAwayListener } from '@mui/material';
import { useSearch,useList } from "@motor-js/engine"
import { Filter } from '@motor-js/components'
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

  const [isOpen, setOpen] = useState(false);
  const [options, setOptions] = useState([]);
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
  });
  console.log(searchValue);


  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSearch = (value) => (
    setSearchValue(value)
  )


  const handleSelect = (val, dim) => {
    flatSelect(dim,val)
    handleClose();
  };

  useEffect(() => {
    setOptions(flatResults)
  },[flatResults])

  return (
    <ClickAwayListener onClickAway={handleClose}>
      <div>
        {!isOpen && (
          <IconButtonAnimate onClick={handleOpen}>
            <Iconify icon={'eva:search-fill'} width={20} height={20} />
          </IconButtonAnimate>
        )}

        <Slide direction="down" in={isOpen} mountOnEnter unmountOnExit>
          <SearchbarStyle>
            <Input
              autoFocus
              fullWidth
              disableUnderline
              placeholder="Search…"
              onChange={(e) => handleSearch(e.target.value)}
              startAdornment={
                <InputAdornment position="start">
                  <Iconify
                    icon={'eva:search-fill'}
                    sx={{ color: 'text.disabled', width: 20, height: 20 }}
                  />
                </InputAdornment>
              }
              sx={{ mr: 1, fontWeight: 'fontWeightBold' }}
            />
            <Button variant="contained" onClick={handleClose}>
              Search
            </Button>
          </SearchbarStyle>


          

        </Slide>
      </div>
    </ClickAwayListener>
  );
}
