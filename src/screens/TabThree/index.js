import React, {useCallback} from 'react';
import {FlatList} from 'react-native';
import LayoutComponent from '../../components/base/LayoutComponent';
import {useNotificationStore} from '../../hooks/useNotificationStore';
import styles from './styles';
import NotificationItem from '../../components/base/NotificationItem';
import {navigateToNotificationTarget} from '../../utility/navigation.helper';
import BottomTabLabels from '../../constants/BottomTabLabels';

const TabThree = () => {
  const notifications = useNotificationStore();

  const handlePress = useCallback(notification => {
    const pn_type = notification?.data?.pn_type;
    if (pn_type) {
      navigateToNotificationTarget(pn_type, notification);
    }
  }, []);

  return (
    <LayoutComponent title={BottomTabLabels.TAB_THREE}>
      <FlatList
        data={notifications}
        keyExtractor={(_, i) => i.toString()}
        renderItem={({item}) => (
          <NotificationItem item={item} onPress={handlePress} />
        )}
        contentContainerStyle={styles.container}
        initialNumToRender={10}
      />
    </LayoutComponent>
  );
};

export default TabThree;
