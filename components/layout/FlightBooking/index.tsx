import React, { useState } from 'react';
import { View, Text } from 'react-native';

import styles from './style';
import Header from './Header';
import RoundTrip from './Round-trip';
import Footer from './Footer';
import OneWay from './One-way';
import MultiCity from './Multi-city';

const FlightBooking = () => {
  const [tabActive, setTabActive] = useState('round-trip');

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.tabContainer}>
        <Text
          style={[styles.tab, tabActive === 'round-trip' && styles.tabActive]}
          onPress={() => setTabActive('round-trip')}
        >
          Round-trip
        </Text>
        <Text
          style={[styles.tab, tabActive === 'one-way' && styles.tabActive]}
          onPress={() => setTabActive('one-way')}
        >
          One-way
        </Text>
        <Text
          style={[styles.tab, tabActive === 'multi-city' && styles.tabActive]}
          onPress={() => setTabActive('multi-city')}
        >
          Multi-city
        </Text>
      </View>

      {tabActive === 'round-trip' && <RoundTrip />}
      {tabActive === 'one-way' && <OneWay />}
      {tabActive === 'multi-city' && <MultiCity />}

      <Footer />
    </View>
  );
};

export default FlightBooking;
