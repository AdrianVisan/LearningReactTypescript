import { createContext } from 'react';
import { UseShowNotification } from './useShowNotification';

const emptyUseShowNotification: UseShowNotification = {
  info: () => {},
  warn: () => {},
  success: () => {},
  error: () => {},
};

export const ShowNotificationContext = createContext<UseShowNotification>(
  emptyUseShowNotification
);
