import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

import styles from './quiz.style'

const BackButton = ({handlePress}) => {
  return (
    <TouchableOpacity style={styles.backButton} onPress={handlePress}>
      <Text style={styles.backText}>Back</Text>
    </TouchableOpacity>
  )
}

export default BackButton