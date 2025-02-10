import React from 'react'
import { Text, TextInput } from 'react-native'

import styles from './journal.style'

const NewEntryInput = () => {
  return (
    <TextInput style={styles.addEntryBox} multiline={true}></TextInput>
  )
}

export default NewEntryInput