import { Box, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'

export const MainLayout = ({children}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box role='main' className='App-body' >
      <Box sx={{ maxWidth: !isMobile ? '960px' : ''}}>
        {children}
      </Box>
    </Box>
  )
};
