import React from 'react'
import { Text } from 'react-native'

import styles from './clocks.style'

const AddictionTitle = ({ title }) => {
  return (
    <Text style={styles.addictionName}>
      {title}
    </Text>
  )
}

export default AddictionTitle