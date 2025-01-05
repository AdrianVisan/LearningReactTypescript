import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { ThemeProvider } from '@mui/material';
import { defaultTheme } from './styles/ThemeProvider.ts';
import ShowNotificationProvider from './hooks/ShowNotificationProvider.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <ShowNotificationProvider>
        <App />
      </ShowNotificationProvider>
    </ThemeProvider>
  </StrictMode>
);
