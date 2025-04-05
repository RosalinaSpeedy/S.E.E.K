import React, { useState, useEffect } from 'react'
import { Text, View, Image, TouchableOpacity, Alert } from 'react-native'

import { router, useFocusEffect } from 'expo-router'

import { deleteClocks, getTime } from '../../services/clockService'

import styles from './clocks.style'
import { icons } from '../../constants'

const StreakCard = ({ id, relapses, startDate, addictionName, handlePress }) => {
  const [time, setTime] = useState({});

  //https://reactnative.dev/docs/alert
  const createTwoButtonAlert = () => {
    Alert.alert('Are you sure?', `You are about to delete the clock:\n${addictionName}\n\nYou sure?`, [
      {
        text: 'Cancel',
        onPress: () => { console.log('delete cancelled') },
        style: 'cancel',
      },
      { text: `I'm sure`, onPress: () => deleteClocks(id) },
    ]);
  }

  useEffect(() => {
    //this doesn't exist yet but yeah:
    if (relapses?.length > 0) {
      getTime(relapses[relapses.length - 1]).then(timey => setTime(timey));
    } else {
      getTime(startDate).then(timey => setTime(timey));
    }

    //console.log(clocks)
  });

  return (
    <View style={styles.streakCardContainer}>
      <TouchableOpacity style={styles.streakCardButton} onPress={handlePress}>
        <View style={styles.streakCardTextContainer}>
          <Image style={styles.badgeIcon} source={icons.goldTrophy} />
          <View style={styles.streakInfoContainer}>
            <Text style={styles.cardAddictionName}>{addictionName}</Text>
            <Text style={styles.streakInfoText}>{`Days active: ${time.days < 0 ? 0 : time.days}`}</Text>
            <Text style={styles.streakInfoText}>
              {`Clean streak: ${time.days}d ${time.hours}h ${time.minutes}m ${time.seconds}s`}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.editButton} onPress={() => router.push(`addnewclock/${id}`)}>
        <Text style={styles.deleteText}>Edit</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.deleteButton} onPress={() => createTwoButtonAlert()}>
        <Text style={styles.deleteText}>Delete</Text>
      </TouchableOpacity>
    </View>

  )
}

export default StreakCard