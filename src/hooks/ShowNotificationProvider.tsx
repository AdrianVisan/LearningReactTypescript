import { ReactNode, SyntheticEvent, useMemo, useState } from 'react';
import { ShowNotificationContext } from './ShowNotificationContext';
import Snackbar, { SnackbarCloseReason } from '@mui/material/Snackbar';
import Alert, { AlertColor } from '@mui/material/Alert';
import Slide from '@mui/material/Slide';
import { UseShowNotification } from './useShowNotification';

type NotificationSettings = { severity: AlertColor; message: string };

function ShowNotificationProvider({ children }: { children?: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [notificationSettings, setNotificationSettings] =
    useState<NotificationSettings>({ severity: 'info', message: '' });
  const showNotification = (input: NotificationSettings) => {
    setNotificationSettings(input);
    setOpen(true);
  };
  function handleClose(
    event: Event | SyntheticEvent<Element, Event>,
    reason: SnackbarCloseReason
  ): void {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  }

  const contextValue: UseShowNotification = useMemo(() => {
    const info = (message: string) => {
      showNotification({ severity: 'info', message });
    };

    const success = (message: string) => {
      showNotification({ severity: 'success', message });
    };

    const warn = (message: string) => {
      showNotification({ severity: 'warning', message });
    };

    const error = (message: string) => {
      showNotification({ severity: 'error', message });
    };
    return {
      info,
      success,
      warn,
      error,
    };
  }, []);

  return (
    <ShowNotificationContext.Provider value={contextValue}>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={open}
        onClose={handleClose}
        autoHideDuration={3000}
        TransitionComponent={Slide}>
        <Alert
          severity={notificationSettings.severity}
          variant="filled"
          onClose={(event) => {
            handleClose(event, 'escapeKeyDown');
          }}>
          {notificationSettings.message}
        </Alert>
      </Snackbar>
      {children}
    </ShowNotificationContext.Provider>
  );
}

export default ShowNotificationProvider;
