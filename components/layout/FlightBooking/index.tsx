import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { router } from 'expo-router';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';

const FlightBooking = () => {
  const [tabActive, setTabActive] = useState('round-trip');
  const nowDate = new Date().toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  });
  return (
    <View
      style={{
        marginHorizontal: 10,
        height: '100%',
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
            color: tabActive === 'round-trip' ? '#000' : 'gray',
            paddingHorizontal: 16,
            paddingBottom: 10,
            borderBottomWidth: tabActive === 'round-trip' ? 2 : 0,
          }}
          onPress={() => setTabActive('round-trip')}
        >
          Round-trip
        </Text>
        <Text
          style={{
            fontSize: 20,
            fontWeight: '700',
            color: tabActive === 'one-way' ? '#000' : 'gray',
            paddingHorizontal: 16,
            paddingBottom: 10,
            borderBottomWidth: tabActive === 'one-way' ? 2 : 0,
          }}
          onPress={() => setTabActive('one-way')}
        >
          One-way
        </Text>
        <Text
          style={{
            fontSize: 20,
            fontWeight: '700',
            color: tabActive === 'multi-city' ? '#000' : 'gray',
            paddingHorizontal: 16,
            paddingBottom: 10,
            borderBottomWidth: tabActive === 'multi-city' ? 2 : 0,
          }}
          onPress={() => setTabActive('multi-city')}
        >
          Multi-city
        </Text>
      </View>

      {tabActive === 'round-trip' && (
        <>
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
              <FontAwesome5
                name='plane-departure'
                size={18}
                color='black'
                style={{
                  paddingHorizontal: 10,
                }}
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
              <FontAwesome5
                name='plane-arrival'
                size={18}
                color='black'
                style={{
                  paddingHorizontal: 10,
                }}
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

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}
            >
              <View
                style={{
                  width: '48%',
                  flexDirection: 'row',
                  alignItems: 'center',
                  backgroundColor: '#f2f2f2',
                  borderRadius: 10,
                  marginTop: 10,
                  padding: 10,
                }}
              >
                <FontAwesome
                  name='calendar'
                  size={24}
                  color='black'
                  style={{ marginRight: 12 }}
                />
                <TextInput
                  placeholder={nowDate}
                  style={{
                    flex: 1,
                    height: 30,
                    fontSize: 16,
                    fontWeight: '700',
                    color: 'gray',
                  }}
                />
              </View>

              <View
                style={{
                  width: '48%',
                  flexDirection: 'row',
                  alignItems: 'center',
                  backgroundColor: '#f2f2f2',
                  borderRadius: 10,
                  marginTop: 10,
                  padding: 10,
                }}
              >
                <FontAwesome
                  name='calendar'
                  size={24}
                  color='black'
                  style={{ marginRight: 12 }}
                />
                <TextInput
                  placeholder={nowDate}
                  style={{
                    flex: 1,
                    height: 30,
                    fontSize: 16,
                    fontWeight: '700',
                    color: 'gray',
                  }}
                />
              </View>
            </View>
          </View>

          <View
            style={{
              height: 60,
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: 10,
              marginVertical: 20,
              borderTopWidth: 1,
              borderTopColor: '#ccc',
              borderBottomWidth: 1,
              borderBottomColor: '#ccc',
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 10,
              }}
            >
              <FontAwesome
                name='user'
                size={24}
                color='black'
                style={{
                  alignSelf: 'center',
                  marginRight: 10,
                }}
              />
              <Text
                style={{
                  fontWeight: '700',
                  fontSize: 16,
                }}
              >
                1 traveller
              </Text>
            </View>
            <Entypo name='dot-single' size={24} color='black' />
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 10,
              }}
            >
              <FontAwesome
                name='user'
                size={24}
                color='black'
                style={{
                  alignSelf: 'center',
                  marginRight: 10,
                }}
              />
              <Text
                style={{
                  fontWeight: '700',
                  fontSize: 16,
                }}
              >
                Economy
              </Text>
            </View>

            <AntDesign
              name='caretdown'
              size={20}
              color='black'
              style={{
                position: 'absolute',
                right: 10,
              }}
            />
          </View>
        </>
      )}

      <View
        style={{
          width: '100%',
          position: 'absolute',
          bottom: 30,
          padding: 10,
        }}
      >
        <TouchableOpacity
          style={{
            padding: 12,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#00BDD6',
            borderRadius: 10,
          }}
        >
          <Text
            style={{
              fontWeight: '700',
              fontSize: 16,
              color: '#fff',
            }}
          >
            Search flights
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FlightBooking;
