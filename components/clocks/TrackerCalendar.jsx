import React from 'react'
import { Text, View } from 'react-native'

// https://github.com/wix/react-native-calendars

import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import { useState, useCallback } from 'react';

import styles from './clocks.style'

const TrackerCalendar = () => {
  const [selected, setSelected] = useState('');
  return (
    <Calendar
      onDayPress={day => {
        setSelected(day.dateString);
      }}
      markedDates={{
        [selected]: {selected: true, disableTouchEvent: true, selectedDotColor: 'orange'}
      }}
    />
  )
}

export default TrackerCalendar