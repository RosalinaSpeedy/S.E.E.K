import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

import styles from './forum.style'

const ApprovalOptions = ({handleTickPress, handleCrossPress}) => {
  return (
    <View style={styles.approvalButtonsContainer}>
        <TouchableOpacity 
            style={styles.approveButton}
            onPress={() => {
                handleTickPress()
            }}
        >
            <Text style={styles.approveButtonText}>Approve</Text>
        </TouchableOpacity>
        <TouchableOpacity 
            style={styles.deleteButton}
            onPress={() => {
                handleCrossPress()
            }}
        >
            <Text style={styles.approveButtonText}>Delete</Text>
        </TouchableOpacity>
    </View>
  )
}

export default ApprovalOptions