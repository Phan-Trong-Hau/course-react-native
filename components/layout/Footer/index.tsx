import { FontAwesome } from '@expo/vector-icons';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import styles from './style';

const Footer = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.item}
        onPress={() => {
          /* Handle Home press */
        }}
      >
        <FontAwesome name='home' size={24} color='#666' />
        <Text style={styles.text}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.item}
        onPress={() => {
          /* Handle Explore press */
        }}
      >
        <FontAwesome name='globe' size={24} color='#666' />
        <Text style={styles.text}>Explore</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.item}
        onPress={() => {
          /* Handle Profile press */
        }}
      >
        <FontAwesome name='user' size={24} color='#666' />
        <Text style={styles.text}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;
