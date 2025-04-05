import React from 'react'
import { Text, Image } from 'react-native'

import styles from './login.style'
import { icons } from '../../constants'

const BigSeekLogo = () => {
  return (
    <Image
        source={icons.logo}
        style={styles.BigSeekLogo}
    />
  )
}

export default BigSeekLogo