import React from 'react';
import {FlatList, Text, View, StyleSheet} from 'react-native';
import {useNotificationStore} from '../../hooks/useNotificationStore';

const NotificationScreen = () => {
  const notifications = useNotificationStore();

  return (
    <FlatList
      data={notifications}
      keyExtractor={(_, i) => i.toString()}
      renderItem={({item}) => (
        <View style={styles.item}>
          <Text style={styles.title}>
            {item.notification?.title || 'Başlık yok'}
          </Text>
          <Text>{item.notification?.body || 'Mesaj yok'}</Text>
        </View>
      )}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {padding: 16},
  item: {
    padding: 12,
    marginBottom: 10,
    backgroundColor: '#eee',
    borderRadius: 8,
  },
  title: {fontWeight: 'bold', marginBottom: 4},
});

export default NotificationScreen;
