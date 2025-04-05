import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

import styles from './clocks.style'

const RelapseButton = ({handlePress}) => {
  return (
    <TouchableOpacity style={styles.relapseButtonContainer} onPress={handlePress}>
        <Text style={styles.relapseButtonText}>Relapse</Text>
    </TouchableOpacity>
  )
}

export default RelapseButton