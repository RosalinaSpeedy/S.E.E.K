import React from 'react'
import { Text } from 'react-native'

import styles from './journal.style'

const NewEntryTitle = ({id}) => {
  return (
    <Text style={styles.journalTitle}>
        {id ? "Edit Entry" : "New entry"}
    </Text>
  )
}

export default NewEntryTitle