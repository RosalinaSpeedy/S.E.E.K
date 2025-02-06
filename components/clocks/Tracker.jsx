import React from 'react'
import { Text, TouchableOpacity, View, Image } from 'react-native'

import styles from './clocks.style'

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
      
    </View>
  )
}

export default Tracker