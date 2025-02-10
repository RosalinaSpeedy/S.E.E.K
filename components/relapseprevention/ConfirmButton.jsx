import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

import styles from './relapseprevention.style'

const ConfirmButton = () => {
  return (
    <TouchableOpacity style={styles.confirmButton}>
        <Text style={styles.confirmText}>
            Confirm
        </Text>
    </TouchableOpacity>
  )
}

export default ConfirmButton