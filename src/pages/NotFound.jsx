import React from 'react'
import Typography from '@mui/material/Typography'
import { Box, useTheme } from '@mui/material'

function NotFound() {
    const theme = useTheme();
  return (
    <Box>
      <Typography color={theme.palette.error.main} variant="h4">Not Found</Typography>
    </Box>
  )
}

export default NotFound
