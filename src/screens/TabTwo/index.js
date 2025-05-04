import React, {useState, useCallback} from 'react';
import {View, Text} from 'react-native';
import LayoutComponent from '../../components/base/LayoutComponent';
import styles from './styles';
import TokenDisplay from '../../components/base/TokenDisplay';
import MessageTypePicker from '../../components/base/MessageTypePicker';
import DelayInput from '../../components/base/DelayInput';
import SendButton from '../../components/base/SendButton';
import {useFirebaseMessaging} from '../../hooks/useFirebaseMessaging';
import BottomTabLabels from '../../constants/BottomTabLabels';
import {useSendNotification} from '../../hooks/useSendNotification';

const TabTwo = () => {
  const [pnType, setPnType] = useState('');
  const [delay, setDelay] = useState('');
  const {token, hasPermission} = useFirebaseMessaging();
  const {mutate, isPending} = useSendNotification();

  const handleSend = useCallback(() => {
    if (!token) return;
    mutate({
      fcm_token: token,
      pn_type: Number(pnType),
      pn_delay: Number(delay),
    });
  }, [token, pnType, delay, mutate]);

  return (
    <LayoutComponent title={BottomTabLabels.TAB_TWO}>
      <View style={styles.container}>
        <TokenDisplay token={token || 'No Token'} />

        {!hasPermission ? (
          <Text style={styles.warning}>Notification permission denied.</Text>
        ) : (
          <>
            <MessageTypePicker pnType={pnType} setPnType={setPnType} />
            <DelayInput delay={delay} setDelay={setDelay} />
            <SendButton onPress={handleSend} isLoading={isPending} />
          </>
        )}
      </View>
    </LayoutComponent>
  );
};

export default TabTwo;
