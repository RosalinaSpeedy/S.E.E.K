import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

import styles from './journal.style'

const SaveButton = ({handlePress}) => {
  return (
    <TouchableOpacity style={styles.saveButton} onPress={handlePress}>
      <Text style={styles.saveText}>Save</Text>
    </TouchableOpacity>
  )
}

export default SaveButton