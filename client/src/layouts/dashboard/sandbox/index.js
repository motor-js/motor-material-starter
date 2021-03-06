import { useState, useEffect } from 'react';
// @mui
import { styled } from '@mui/material/styles';
import { Input, Slide, Button, InputAdornment, ClickAwayListener } from '@mui/material';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';
// motor
import { useSearch } from "@motor-js/engine"
// utils
import cssStyles from '../../../utils/cssStyles';
// components
import Iconify from '../../../components/Iconify';
import { IconButtonAnimate } from '../../../components/animate';

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
  const [options, setOptions] = useState([]);
  const [isOpen, setOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const qCount = 100;
  const qGroupItemCount = 100;
  const [typingTimer, setTypingTimer] = useState('');
  const [doneTypingInterval, setdoneTypingInterval] = useState();
  const [userInput, setuserInput] = useState();



  const {
    flatResults,
    flatSelect,
  } = useSearch({
    searchValue,
    qCount,
    qGroupItemCount
  })

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
    flatSelect(dim, val)
    handleClose();
  };

  useEffect(() => {
    setOptions(flatResults)
  }, [flatResults])

  const searchValues = {
    options: flatResults,
    getOptionLabel: (option) => option.value,
  };
// user is typing something



// if (userInput) {
//   userInput.addEventListener("keyup", () => {
//     clearTimeout(typingTimer);
//     if (userInput.value) {
//       typingTimer = setTimeout(doneTyping, doneTypingInterval);
//     }
//   });
// }

function doneTyping() {
  console.log("done");
}

// ----------------------------------------------------------------------
  return (
    <ClickAwayListener onClickAway={handleClose}>
      <div>
        {!isOpen && (
          <IconButtonAnimate onClick={handleOpen}>
            <Iconify icon={'eva:search-fill'} width={20} height={20} />
          </IconButtonAnimate>
        )}

        <Slide direction="down" in={isOpen} mountOnEnter unmountOnExit>
          <Stack>
            <SearchbarStyle >
              <Autocomplete
                {...searchValues}
                size = "large"
                fullWidth = {true}
                autoComplete
                autoHighlight
                includeInputInList
                type="search"
                placeholder="Type and hit enter to search..."
                customStyle="noborder"
                fontSize={["14px", null, null, "16px"]}
                width="100%"
                renderInput={(params) => (
                  <TextField {...params} variant="standard" label="Search.."
                    onChange={(e) => handleSearch(e.target.value)} />
                )}
              />
              <Button variant="contained" onClick={handleClose} id="searchbtn">
                Search
              </Button>
            </SearchbarStyle>
          </Stack>
        </Slide>
      </div>
    </ClickAwayListener>
  );
}
