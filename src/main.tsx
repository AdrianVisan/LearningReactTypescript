import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { createTheme, ThemeProvider } from '@mui/material';

const defaultTheme = createTheme({
  palette: {
    secondary: {
      light: '#939ed5',
      main: '#7986cb',
      dark: '#545d8e',
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

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <App />
    </ThemeProvider>
  </StrictMode>
);
