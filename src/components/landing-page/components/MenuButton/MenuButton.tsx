import { PropsWithChildren, useState } from 'react';
import Menu from '@mui/material/Menu';
import { Box, IconButton } from '@mui/material';
import { MenuRounded } from '@mui/icons-material';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import { ROUTES } from 'src/common/types/routes.types';

export const MenuButton = ({children}: PropsWithChildren)=> {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const open = anchorEl ? true : false;

  const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box role="navigation">
      <IconButton
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
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
        
        <MenuItem onClick={handleClose}></MenuItem>
        <MenuItem onClick={handleClose}>Or Other</MenuItem>
        <MenuItem onClick={handleClose}>Or Neither</MenuItem>
      </Menu>
    </Box>
  );
};
