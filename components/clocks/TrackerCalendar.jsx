import React from 'react'
import { Text, View } from 'react-native'

// https://github.com/wix/react-native-calendars
// https://stackoverflow.com/questions/69318822/render-image-on-each-date-using-react-native-calendars

import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import { useState, useCallback } from 'react';

import styles from './clocks.style'

const TrackerCalendar = () => {
  const [selected, setSelected] = useState('');
  return (
    <View style={styles.calendarContainer}>
      <Calendar
        style={styles.calendarMain}
        onDayPress={day => {
          setSelected(day.dateString);
        }}
        dayComponent={({ date, state }) => {
          return (
            <View>
              <Text style={{ textAlign: 'center', color: state === 'disabled' ? 'gray' : 'black' }}>
                {date.day}
              </Text>
            </View>
          );
        }}
        markedDates={{
          [selected]: { selected: true, disableTouchEvent: true, selectedDotColor: 'orange' }
        }}
      />
    </View>
  )
}

export default TrackerCalendar