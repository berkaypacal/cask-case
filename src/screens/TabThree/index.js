import React from 'react';
import {FlatList} from 'react-native';
import LayoutComponent from '../../components/base/LayoutComponent';
import {useNotificationStore} from '../../hooks/useNotificationStore';
import styles from './styles';
import NotificationItem from '../../components/base/NotificationItem';

const TabThree = () => {
  const notifications = useNotificationStore();

  return (
    <LayoutComponent title="Tab 3">
      <FlatList
        data={notifications}
        keyExtractor={(_, i) => i.toString()}
        renderItem={({item}) => <NotificationItem item={item} />}
        contentContainerStyle={styles.container}
        initialNumToRender={5}
      />
    </LayoutComponent>
  );
};

export default TabThree;
