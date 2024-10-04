import { Image, Text, TextInput, View } from 'react-native';

import styles from './style';

const Header = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('@/assets/images/icon.png')}
        style={styles.image}
      />
      <View style={styles.textContainer}>
        <Text style={styles.title}>Explore flight</Text>
        <Text style={styles.subtitle}>Welcome to flight booking</Text>
      </View>
      <View>
        <TextInput style={styles.searchInput}></TextInput>
      </View>
    </View>
  );
};

export default Header;
