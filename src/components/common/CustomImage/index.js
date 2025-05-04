import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './styles';

const CustomImage = ({url}) => {
  if (!url) {
    return (
      <View style={styles.fallbackContainer}>
        <Text style={styles.fallbackText}>Image Not Found</Text>
      </View>
    );
  }

  return (
    <Image source={{uri: url}} style={styles.image} resizeMode="contain" />
  );
};

export default CustomImage;
