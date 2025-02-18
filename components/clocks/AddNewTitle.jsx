import React from 'react'
import { Text } from 'react-native'

import styles from './clocks.style'

const AddNewTitle = ({clock}) => {
  return (
    <Text style={styles.addNewTitle}>
      {clock.addictionName ? `Edit clock` : `Create new clock`}
    </Text>
  )
}

export default AddNewTitle