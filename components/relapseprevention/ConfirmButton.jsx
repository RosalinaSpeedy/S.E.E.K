import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

import styles from './relapseprevention.style'

const ConfirmButton = ({pledgeSet, handlePress}) => {
  return (
                        
    <TouchableOpacity
      style={pledgeSet ? styles.disabledButton : styles.confirmButton}
      disabled={pledgeSet ? true : false}
      onPress={handlePress}
    >
        <Text style={styles.confirmText}>
            {pledgeSet ? "Good luck!" : "Confirm"}
        </Text>
    </TouchableOpacity>
  )
}

export default ConfirmButton