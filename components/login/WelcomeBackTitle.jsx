import React from 'react'
import { Text } from 'react-native'

import styles from './login.style'

const WelcomeBackTitle = ({type}) => {
  return (
    <Text style={styles.welcomeBackTitle}>
      {type}
    </Text>
  )
}

export default WelcomeBackTitle