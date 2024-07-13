import React from 'react'
import { AppBar, Box, Toolbar, Typography, InputBase  } from '@mui/material';
import { styled, alpha } from '@mui/material';
import { Search } from '@mui/icons-material';
import { MenuButton } from '../components/MenuButton/MenuButton';

const SearchWrapper = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: 'grey',
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
    },
  },
}));

export const HeaderBar = () => {
  const handleBrokenChange = () => {
    console.log('search')
  }
  return (
    <Box sx={{flexGrow: 1}}>
      <AppBar sx={{ backgroundColor: 'white', color: '#282c34'}}>
        <Toolbar>
          <MenuButton />
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, width: "20%" }}
          >
            Ben Goodwin Kitchen Sink
          </Typography>
          <SearchWrapper>
            <SearchIconWrapper>
              <Search />
            </SearchIconWrapper>
            <StyledInputBase
              onChange={handleBrokenChange}
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </SearchWrapper>
        </Toolbar>
      </AppBar>
    </Box>
  )
};
