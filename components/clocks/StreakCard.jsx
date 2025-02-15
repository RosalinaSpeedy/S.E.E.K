import React from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'

import { router } from 'expo-router'

import styles from './clocks.style'
import { icons } from '../../constants'

const StreakCard = ({id, relapses, startDate, addictionName, handlePress}) => {
  return (
    <View style={styles.streakCardContainer}>
        <TouchableOpacity style={styles.streakCardButton} onPress={handlePress}>
            <View style={styles.streakCardTextContainer}>
                <Image style={styles.badgeIcon} source={icons.goldTrophy}/>
                <View style={styles.streakInfoContainer}>
                    <Text style={styles.cardAddictionName}>{addictionName}</Text>
                    <Text style={styles.streakInfoText}>Days active: 420</Text>
                    <Text style={styles.streakInfoText}>Clean streak: 420d 12h 45m 31s</Text>
                </View>
            </View>
        </TouchableOpacity>
    </View>
    
  )
}

export default StreakCard