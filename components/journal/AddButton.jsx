import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

import styles from './journal.style'

const AddButton = () => {
  return (
    <TouchableOpacity style={styles.addButton}>
      <Text style={styles.plus}>+</Text>
    </TouchableOpacity>
  )
}

export default AddButton