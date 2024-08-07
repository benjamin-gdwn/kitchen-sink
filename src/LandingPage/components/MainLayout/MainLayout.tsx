import { Box, useMediaQuery, useTheme } from '@mui/material'
import { PropsWithChildren } from 'react'

export const MainLayout = ({children}:PropsWithChildren) => {
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
