import { useState } from 'react';
import Menu from '@mui/material/Menu';
import { IconButton } from '@mui/material';
import { MenuRounded } from '@mui/icons-material';
import MenuItem from '@mui/material/MenuItem';

export const MenuButton = ()=> {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = anchorEl ? true : false;
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        icon
      >
        <MenuRounded />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Something</MenuItem>
        <MenuItem onClick={handleClose}>Or Other</MenuItem>
        <MenuItem onClick={handleClose}>Or Neither</MenuItem>
      </Menu>
    </>
  );
};
