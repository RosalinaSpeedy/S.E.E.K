import React, { useEffect } from 'react'
import { Text, View } from 'react-native'

// https://github.com/wix/react-native-calendars
// https://stackoverflow.com/questions/69318822/render-image-on-each-date-using-react-native-calendars

import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import { useState, useCallback } from 'react';

import styles from './clocks.style'

const emotionExists = false;

function transformDates() {

  return dates;
}

const TrackerCalendar = (relapses) => {
  const [selected, setSelected] = useState('');
  const [relapseMarkers, setRelapseMarkers] = useState(relapses.relapses.map((item) => {
    item = new Date(item);
    item = item.toISOString().split('T')[0];
    return item;
  }));
  //console.log(relapseMarkers);

  useEffect(() => {
    //console.log("relapses updated");
    setRelapseMarkers(relapses.relapses.map((item) => {
      item = new Date(item);
      item = item.toISOString().split('T')[0];
      return item;
    }))
    //console.log(relapseMarkers)
  }, [relapses])

  return (
    <View style={styles.calendarContainer}>
      <Calendar
        style={styles.calendarMain}
        onDayPress={day => {
          setSelected(day.dateString);
        }}
        dayComponent={({ date, state }) => {
          //console.log(date)
          return (
            <View style={
                relapseMarkers.includes(date.dateString) ? styles.relapseRing : 
                new Date().toISOString().split('T')[0] == date.dateString ? styles.todayRing :
                styles.dateRing 
              }>
              {emotionExists ? console.log("Found face") :
              <Text style={{ textAlign: 'center', color: state === 'disabled' ? 'gray' : 'black' }}>
                {date.day}
              </Text>}
              
            </View>
          );
        }}
      />
    </View>
  )
}

export default TrackerCalendar