import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

import styles from './quiz.style'

const GenerateButton = ({handlePress}) => {
  return (
    <TouchableOpacity onPress={handlePress} style={styles.generateButton}>
        <Text style={styles.generateButtonText}>
            Generate
        </Text>
    </TouchableOpacity>
  )
}

export default GenerateButton 