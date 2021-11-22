import { createTheme, responsiveFontSizes } from '@mui/material/styles'

// Override the default MUI theme:
// https://material-ui.com/customization/default-theme/
// https://material-ui.com/customization/theming/#api

let theme = createTheme({
  // palette: { type: 'dark' },
  palette: {
    primary: {
      lightest: '#f5f7ff', // very, very light blue
      main: '#3f51b5', // default MUI theme blue (required)
    },
  },

  typography: {
    // Set global fonts here (install them in Helmet in the main App):
    // https://material-ui.com/customization/typography/#font-family

    // Default font should be Roboto with Open Sans titles and accents
    fontFamily: ['Roboto', 'sans-serif'].join(','),
    h1: {
      fontFamily: ['Open Sans', 'sans-serif'].join(','),
    },
    h2: {
      fontFamily: ['Open Sans', 'sans-serif'].join(','),
    },
    h3: {
      fontFamily: ['Open Sans', 'sans-serif'].join(','),
    },
    h4: {
      fontFamily: ['Open Sans', 'sans-serif'].join(','),
    },
    h5: {
      fontFamily: ['Open Sans', 'sans-serif'].join(','),
    },
  },

  // Override theme globally
  // https://github.com/mui-org/material-ui/issues/12654#issuecomment-529517398
  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          backgroundColor: '#fff',
        },
      },
    },
  },
})
theme = responsiveFontSizes(theme)

export default theme
