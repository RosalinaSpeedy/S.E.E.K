import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

import styles from './relapseprevention.style'

const RegenerateButton = () => {
  return (
    <TouchableOpacity style={styles.regenerateButton}>
        <Text style={styles.regenerateButtonText}>Regenerate</Text>
        <Text style={styles.regenerateButtonText}>Plan</Text>
    </TouchableOpacity>
  ) 
}

export default RegenerateButton