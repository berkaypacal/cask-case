import {useMutation} from '@tanstack/react-query';
import {sendNotification} from '../api/sendNotification';

export const useSendNotification = () => {
  return useMutation({
    mutationFn: sendNotification,
  });
};
