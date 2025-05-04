import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

const LayoutComponent = ({title, children}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.content}>{children}</View>
    </View>
  );
};

export default LayoutComponent;
