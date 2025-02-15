import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

import styles from './clocks.style'

const NewClockButton = ({handlePress}) => {
  return (
    <TouchableOpacity style={styles.newClockButton} onPress={handlePress}>
        <Text style={styles.newClockButtonText}>
            New clock
        </Text>
    </TouchableOpacity>
  )
}

export default NewClockButton