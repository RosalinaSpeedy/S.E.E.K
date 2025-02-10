import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

import styles from './journal.style'

const AddButton = ({handlePress}) => {
  return (
    <TouchableOpacity style={styles.addButton} onPress={handlePress}>
      <Text style={styles.plus}>+</Text>
    </TouchableOpacity>
  )
}

export default AddButton