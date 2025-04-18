import React from 'react'
import { Text, Image } from 'react-native'

import styles from './mainnav.style'
import { icons } from '../../../constants'

const AlertIcon = () => {
  return (
    <Image
        source={icons.alert}
        style={styles.alertIcon}
    />
  )
}

export default AlertIcon