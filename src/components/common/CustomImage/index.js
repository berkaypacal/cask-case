import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './styles';

/**
 * CustomImage component renders an image or a fallback message if the image URL is not provided.
 *
 * @param {Object} props - The component props.
 * @param {string} props.url - The URL of the image to display.
 *
 * @returns {JSX.Element} The rendered CustomImage component.
 */
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
