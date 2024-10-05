import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import {
  AntDesign,
  Entypo,
  FontAwesome,
  FontAwesome5,
} from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';

import styles from './style';

export default function RoundTrip() {
  const [open, setOpen] = React.useState<{
    departure: boolean;
    arrival: boolean;
  }>({
    departure: false,
    arrival: false,
  });
  const [dates, setDates] = React.useState<{ departure: Date; arrival: Date }>({
    departure: new Date(),
    arrival: new Date(),
  });

  const onChange = (
    event: any,
    selectedDate?: Date,
    type?: 'departure' | 'arrival',
  ) => {
    if (type) {
      setOpen(prev => ({ ...prev, [type]: false }));
      if (selectedDate) {
        setDates(prev => ({ ...prev, [type]: selectedDate }));
      }
    }
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <>
      <View style={styles.inputContainer}>
        <View style={styles.inputWrapper}>
          <FontAwesome5
            name='plane-departure'
            size={18}
            color='black'
            style={styles.icon}
          />
          <TextInput placeholder='From' style={styles.input} />
        </View>

        <View style={styles.inputWrapper}>
          <FontAwesome5
            name='plane-arrival'
            size={18}
            color='black'
            style={styles.icon}
          />
          <TextInput placeholder='To' style={styles.input} />
        </View>

        <TouchableOpacity style={styles.exchangeButton}>
          <FontAwesome
            name='exchange'
            size={20}
            color='black'
            style={styles.exchangeIcon}
          />
        </TouchableOpacity>

        <View style={styles.dateContainer}>
          <TouchableOpacity
            style={styles.dateWrapper}
            onPress={() => setOpen(prev => ({ ...prev, departure: true }))}
          >
            <FontAwesome
              name='calendar'
              size={24}
              color='black'
              style={styles.icon}
            />
            <Text style={styles.dateInput}>{formatDate(dates.departure)}</Text>
            {open.departure && (
              <DateTimePicker
                value={dates.departure}
                mode={'date'}
                onChange={(event, selectedDate) =>
                  onChange(event, selectedDate, 'departure')
                }
              />
            )}
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.dateWrapper}
            onPress={() => setOpen(prev => ({ ...prev, arrival: true }))}
          >
            <FontAwesome
              name='calendar'
              size={24}
              color='black'
              style={styles.icon}
            />
            <Text style={styles.dateInput}>{formatDate(dates.arrival)}</Text>
          </TouchableOpacity>
          {open.arrival && (
            <DateTimePicker
              value={dates.arrival}
              mode={'date'}
              onChange={(event, selectedDate) =>
                onChange(event, selectedDate, 'arrival')
              }
            />
          )}
        </View>
      </View>

      <View style={styles.travellerContainer}>
        <View style={styles.travellerWrapper}>
          <FontAwesome
            name='user'
            size={24}
            color='black'
            style={styles.icon}
          />
          <Text style={styles.travellerText}>1 traveller</Text>
        </View>
        <Entypo name='dot-single' size={24} color='black' />
        <View style={styles.travellerWrapper}>
          <FontAwesome
            name='user'
            size={24}
            color='black'
            style={styles.icon}
          />
          <Text style={styles.travellerText}>Economy</Text>
        </View>
        <AntDesign
          name='caretdown'
          size={20}
          color='black'
          style={styles.caretIcon}
        />
      </View>
    </>
  );
}
