import { createTheme } from '@mui/material/styles';

export const defaultTheme = createTheme({
  palette: {
    secondary: {
      light: '#89d2dc',
      main: '#6bc7d1',
      dark: '#17575e',
      contrastText: 'white',
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
    },
  },
});
