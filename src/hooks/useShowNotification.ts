import { useContext } from 'react';
import { ShowNotificationContext } from './ShowNotificationContext';

export interface ShowNotificationAction {
  (message: string): void;
}

export interface UseShowNotification {
  info: ShowNotificationAction;
  warn: ShowNotificationAction;
  success: ShowNotificationAction;
  error: ShowNotificationAction;
}

export function useShowNotification(): UseShowNotification {
  const context = useContext(ShowNotificationContext);

  return context;
}
