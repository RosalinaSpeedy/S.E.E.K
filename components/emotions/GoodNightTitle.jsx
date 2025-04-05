import React from 'react'
import { Text } from 'react-native'

import styles from './emotion.style'

const GoodNightTitle = () => {
  return (
    <Text style={styles.goodNightTitle}>
        {"Good night...\n\nHow did it go today?"}
    </Text>
  )
}

export default GoodNightTitle