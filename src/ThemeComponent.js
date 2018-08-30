import React from 'react'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import App from './App'

const theme = createMuiTheme({
  typography: {
    fontFamily: 'Play'
  }
})

function TypographyTheme () {
  return (
    <MuiThemeProvider theme={theme}>
      <Typography>
        <App />
      </Typography>
    </MuiThemeProvider>
  )
}

export default TypographyTheme
