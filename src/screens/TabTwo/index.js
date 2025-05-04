import React, {useState} from 'react';
import {View} from 'react-native';
import LayoutComponent from '../../components/base/LayoutComponent';
import styles from './styles';
import TokenDisplay from '../../components/base/TokenDisplay';
import MessageTypePicker from '../../components/base/MessageTypePicker';
import DelayInput from '../../components/base/DelayInput';
import SendButton from '../../components/base/SendButton';

const TabTwo = () => {
  const [pnType, setPnType] = useState('');
  const [delay, setDelay] = useState('');
  const fcmToken =
    'CASKvugnSMrRrQPfb5Ty6OOKZBX268QlVOkZKmhOXIwINP1zlBih2h5emfTApbGUsTS85jYbvvKGrbQzsI4TCujbGuwidySnnDEtdg7NdYS5CKYR2j7QF4kkslnYABGdIcnT';

  return (
    <LayoutComponent title="Tab 2">
      <View style={styles.container}>
        <TokenDisplay token={fcmToken} />
        <MessageTypePicker pnType={pnType} setPnType={setPnType} />
        <DelayInput delay={delay} setDelay={setDelay} />
        <SendButton />
      </View>
    </LayoutComponent>
  );
};

export default TabTwo;
