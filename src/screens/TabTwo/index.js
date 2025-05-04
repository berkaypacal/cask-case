import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import LayoutComponent from '../../components/base/LayoutComponent';
import styles from './styles';
import TokenDisplay from '../../components/base/TokenDisplay';
import MessageTypePicker from '../../components/base/MessageTypePicker';
import DelayInput from '../../components/base/DelayInput';
import SendButton from '../../components/base/SendButton';
import {useFirebaseMessaging} from '../../hooks/useFirebaseMessaging';

const TabTwo = () => {
  const [pnType, setPnType] = useState('');
  const [delay, setDelay] = useState('');
  const {token: fcmToken, hasPermission} = useFirebaseMessaging();

  return (
    <LayoutComponent title="Tab 2">
      <View style={styles.container}>
        <TokenDisplay token={fcmToken || 'Token alınamadı'} />

        {!hasPermission ? (
          <Text style={localStyles.warning}>
            Bildirim izni verilmedi. Bildirim göndermek için izin gerekli.
          </Text>
        ) : (
          <>
            <MessageTypePicker pnType={pnType} setPnType={setPnType} />
            <DelayInput delay={delay} setDelay={setDelay} />
            <SendButton />
          </>
        )}
      </View>
    </LayoutComponent>
  );
};

const localStyles = StyleSheet.create({
  warning: {
    color: 'red',
    marginTop: 16,
    fontSize: 16,
    fontWeight: '500',
  },
});

export default TabTwo;
