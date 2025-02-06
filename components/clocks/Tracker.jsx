import React from 'react'
import { Text, TouchableOpacity, View, Image } from 'react-native'

import styles from './clocks.style'
import { icons } from '../../constants'

const Tracker = () => {
  return (
    <View style={styles.clockContainer}>
      <View style={styles.tracker}>
        <View style={styles.personalBestClock}/>
        <View style={styles.goalProgressClock}/>
        <View style={styles.currentStreakClock}>
        <View style={styles.mainStreakTextContainer}>
          <Text style={styles.youAreText}>You are:</Text>
          <Text style={styles.streakCounterNumber}>420</Text>
          <Text style={styles.daysCleanText}>days clean</Text>
        </View>
      </View>
      </View>
      <View style={styles.clockChangeButtonContainer}>
        <TouchableOpacity style={styles.calendarChangeButton}>
          <Image
            source={icons.calendar}
            style={styles.clockChangeImage}
            resizeMode='cover'
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.clockChangeButton}>
          <Image 
            source={icons.blackclock}
            style={styles.clockChangeImage}
            resizeMode='cover'
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Tracker