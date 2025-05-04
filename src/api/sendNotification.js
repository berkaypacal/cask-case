import axiosInstance from './index';
import {ADMMDLID, SCOPE} from '@env';

/**
 * Sends a push notification request to the backend
 * @param {string} payload.fcm_token
 * @param {string|number} payload.pn_type
 * @param {string|number} payload.pn_delay
 * @returns {Promise<Object>}
 */
export const sendNotification = async ({fcm_token, pn_type, pn_delay}) => {
  const staticPayload = {
    v: 1,
    platform: 'app',
    admmdlid: ADMMDLID,
    scope: SCOPE,
    dev_mode: false,
    fcm_token,
    pn_type: parseInt(pn_type),
    pn_delay: parseInt(pn_delay),
  };

  const {data} = await axiosInstance.post('/api', staticPayload, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return data;
};
