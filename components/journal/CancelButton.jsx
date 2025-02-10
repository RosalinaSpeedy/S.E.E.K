import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

import styles from './journal.style'

const CancelButton = ({handlePress}) => {
  return (
    <TouchableOpacity style={styles.cancelButton} onPress={handlePress}>
      <Text style={styles.saveText}>Cancel</Text>
    </TouchableOpacity>
  )
}

export default CancelButton