import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#4C5288',
      light: '#4C6F87'
    },
    secondary: {
      main: '#ADBD80'
    },
    common: {
      white: '#fff',
      black: 'brown'
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});
