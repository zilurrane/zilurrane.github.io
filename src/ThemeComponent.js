import React from 'react'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import App from './App'

const theme = createMuiTheme({
  typography: {
    fontFamily: 'Play'
  }
})

function TypographyTheme () {
  return (
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  )
}

export default TypographyTheme
