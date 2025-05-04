import axiosInstance from './index';

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
    admmdlid:
      '12f3894ed72fc7d4e3b98688b20513e20a3fa1adbd08b9662412322138d26533',
    scope: '8fbff85cb7a2b8cbd53b3086c0b16d4c1e96a5d748cbf8761bace32ab294e83a',
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
