import React from 'react'
import { Text, TouchableOpacity, View, Image } from 'react-native'

import styles from './clocks.style'

// https://medium.com/@0saurabhgour/react-native-percentage-based-progress-circle-no-external-library-e25b43e83888
const getPercentageStyle = (percent) => {
  const base_degrees = -135;
  const rotateBy = base_degrees + (percent * 3.6);
  return {
    transform: [{ rotateZ: `${rotateBy}deg` }]
  };
}
const renderThirdLayer = (percent, clock) => {
  if (percent > 50) {
    /**
    * Third layer circle default is 45 degrees, so by default it occupies the right half semicircle.
    * Since first 50 percent is already taken care  by second layer circle, hence we subtract it
    * before passing to the propStyle function
    **/
    switch (clock) {
      case "personalBest":
        return <View style={[styles.secondPersonalBestProgressBar, getPercentageStyle((percent), 45)]}></View>
      case "goalProgress":
        return <View style={[styles.secondGoalProgressProgressBar, getPercentageStyle((percent), 45)]}></View>
      case "currentStreak":
        return <View style={[styles.secondCurrentStreakProgressBar, getPercentageStyle((percent), 45)]}></View>
      default:
        return;
    }
  } else {
    switch (clock) {
      case "personalBest":
        return <View style={styles.personalBestOffset}></View>
      case "goalProgress":
        return <View style={styles.goalProgressOffset}></View>
      case "currentStreak":
        return <View style={styles.currentStreakOffset}></View>
      default:
        return;
    }
  }
}

const Tracker = ({ personalBestPercentage, goalProgressPercentage, currentStreakPercentage }) => {
  let personalBestProgress;
  let goalProgressProgress;
  let currentStreakProgress;
  if (personalBestPercentage > 50) {
    personalBestProgress = getPercentageStyle(50, -135);
  } else {
    personalBestProgress = getPercentageStyle(personalBestPercentage, -135);
  }
  if (goalProgressPercentage > 50) {
    goalProgressProgress = getPercentageStyle(50, -135);
  } else {
    goalProgressProgress = getPercentageStyle(goalProgressPercentage, -135);
  }
  if (currentStreakPercentage > 50) {
    currentStreakProgress = getPercentageStyle(50, -135);
  } else {
    currentStreakProgress = getPercentageStyle(currentStreakPercentage, -135);
  }
  return (
    <View style={styles.clockContainer}>
      <View style={styles.tracker}>
        <View style={styles.personalBestClock}>
          <View style={[styles.personalBestProgressBar, personalBestProgress]}></View>
          {renderThirdLayer(personalBestPercentage, "personalBest")}
        </View>
        <View style={styles.goalProgressClock}>
          <View style={[styles.goalProgressProgressBar, goalProgressProgress]}></View>
          {renderThirdLayer(goalProgressPercentage, "goalProgress")}
        </View>
        <View style={styles.currentStreakClock}>
          <View style={[styles.currentStreakProgressBar, currentStreakProgress]}></View>
          {renderThirdLayer(currentStreakPercentage, "currentStreak")}
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