import React from 'react';
import { View, Text } from 'react-native';
import { router } from 'expo-router';

import styles from './style';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.closeButton} onPress={() => router.back()}>
        &times;
      </Text>
      <Text style={styles.headerTitle}>Flight</Text>
      <Text></Text>
    </View>
  );
}
