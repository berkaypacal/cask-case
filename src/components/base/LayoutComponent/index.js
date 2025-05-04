import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

/**
 * LayoutComponent is a reusable layout component that provides a header and content area.
 *
 * @param {Object} props - The props for the component.
 * @param {string} props.title - The title to display in the header.
 * @param {React.ReactNode} props.children - The content to display in the content area.
 * @returns {JSX.Element} The rendered layout component.
 */
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
