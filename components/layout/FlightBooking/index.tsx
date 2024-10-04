import { View, Text, TextInput } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { router } from 'expo-router';

const FlightBooking = () => {
  return (
    <View
      style={{
        marginHorizontal: 10,
      }}
    >
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 10,
        }}
      >
        <Text
          style={{
            fontSize: 32,
            fontWeight: '700',
          }}
          onPress={() => {
            router.back();
          }}
        >
          &times;
        </Text>
        <Text
          style={{
            fontSize: 24,
            fontWeight: '800',
            paddingRight: 20,
          }}
        >
          Flight
        </Text>
        <Text></Text>
      </View>

      <View
        style={{
          marginHorizontal: 10,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottomWidth: 1,
          borderBottomColor: '#f2f2f2',
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: '700',
            color: '#000',
            paddingHorizontal: 16,
            paddingBottom: 10,
            borderBottomWidth: 2,
          }}
        >
          Round-tip
        </Text>
        <Text
          style={{
            fontSize: 20,
            fontWeight: '700',
            color: 'gray',
            paddingHorizontal: 16,
            paddingBottom: 10,
          }}
        >
          One-way
        </Text>
        <Text
          style={{
            fontSize: 20,
            fontWeight: '700',
            color: 'gray',
            paddingHorizontal: 16,
            paddingBottom: 10,
          }}
        >
          Multi-city
        </Text>
      </View>

      <View
        style={{
          margin: 10,
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#f2f2f2',
            borderRadius: 10,
            marginTop: 10,
            padding: 10,
          }}
        >
          <FontAwesome
            name='plane'
            size={24}
            color='black'
            style={{ marginRight: 12 }}
          />
          <TextInput
            placeholder='From'
            style={{
              flex: 1,
              height: 30,
              fontSize: 20,
              fontWeight: '700',
              color: 'gray',
            }}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#f2f2f2',
            borderRadius: 10,
            marginTop: 10,
            padding: 10,
          }}
        >
          <FontAwesome
            name='plane'
            size={24}
            color='black'
            style={{ marginRight: 12 }}
          />
          <TextInput
            placeholder='To'
            style={{
              flex: 1,
              height: 30,
              fontSize: 20,
              fontWeight: '700',
              color: 'gray',
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default FlightBooking;
