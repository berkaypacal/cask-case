import {useMutation} from '@tanstack/react-query';
import {sendNotification} from '../api/sendNotification';

/**
 * Custom hook to send notifications using a mutation function.
 *
 * @returns {Object} A mutation object from `react-query` to handle the notification sending process.
 */
export const useSendNotification = () => {
  return useMutation({
    mutationFn: sendNotification,
  });
};
