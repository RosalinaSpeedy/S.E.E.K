import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

import styles from './clocks.style'

const RelapseButton = () => {
  return (
    <TouchableOpacity style={styles.relapseButtonContainer}>
        <Text style={styles.relapseButtonText}>Relapse</Text>
    </TouchableOpacity>
  )
}

export default RelapseButton