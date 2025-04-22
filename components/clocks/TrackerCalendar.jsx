import React, { useEffect } from 'react'
import { Text, View, Image } from 'react-native'

// https://github.com/wix/react-native-calendars
// https://stackoverflow.com/questions/69318822/render-image-on-each-date-using-react-native-calendars

import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import { useState, useCallback } from 'react';
import { useFocusEffect } from 'expo-router';

import styles from './clocks.style'

import { getAllEmotions } from '../../services/emotionsService';
import { icons } from '../../constants';

const emotionExists = false;

function transformDates() {
  return dates;
}

const TrackerCalendar = (relapses) => {
  const [selected, setSelected] = useState('');
  const [dayEmotions, setDayEmotions] = useState([]);
 
  const [relapseMarkers, setRelapseMarkers] = useState(relapses?.relapses?.map((item) => {
    item = new Date(item);
    item = item.toISOString().split('T')[0];
    return item;
  }));
  //console.log(relapseMarkers);

  const processDates = async (emotions) => {
    emotions.forEach((date) => {
      const tmpDate = date.id;
      date.id = tmpDate.split('T')[0];
    })
    return emotions;
  }

  const getIcon = (emotion) => {
    let emotionIcon;
    switch (emotion) {
      case "smiley":
        emotionIcon = icons.smiley;
        break;
      case "neutral":
        emotionIcon = icons.neutral;
        break;
      case "sad":
        emotionIcon = icons.sad;
        break;
    }
    // console.log("EMOTION IN ICON GENERATOR")
    // console.log(emotion)
    // console.log(emotionIcon)
    return emotionIcon;
  }

  useEffect(() => {
    //console.log("relapses updated");
    setRelapseMarkers(relapses.relapses.map((item) => {
      item = new Date(item);
      item = item.toISOString().split('T')[0];
      return item;
    }))
    const emotions = getAllEmotions().then(async (emotions) =>
      setDayEmotions(await processDates(emotions))
    );
    
    //console.log(emotions);
    //console.log(dayEmotions);
    //console.log(relapseMarkers)
  }, [])
  //relapses, dayEmotions

  return (
    <View style={styles.calendarContainer}>
      <Calendar
        style={styles.calendarMain}
        onDayPress={day => {
          setSelected(day.dateString);
        }}
        dayComponent={({ date, state }) => {
          const [dayIndex, setDayIndex] = useState(-1);
          //console.log(date)
          
          // const updateDayIndex = (daystring) => {
          //   const exists = {
          //     setDayIndex(e);
          //     return exists;
          //   }
          //   return false;
          // }
          useEffect(() => {
            setDayIndex(dayEmotions.findIndex(e => e.id === date.dateString));
            //console.log(dayIndex);
          }, [])
          
          return (
            <View style={
              relapseMarkers.includes(date.dateString) ? styles.relapseRing :
                new Date().toISOString().split('T')[0] == date.dateString ? styles.todayRing :
                  styles.dateRing
            }>
              {dayIndex > -1 ?
                <View><Image
                  style={styles.emotionIcon}
                  source={
                    getIcon(dayEmotions[dayIndex].emotion)
                  }
                /></View> :
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