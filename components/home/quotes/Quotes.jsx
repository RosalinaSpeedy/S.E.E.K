import React from 'react'
import { View, Text } from 'react-native'

import styles from './quotes.style'

const Quotes = ({quote}) => {
  return (
    <View style={styles.quoteContainer}>
      <Text style={styles.dailyQuoteTitle}>Daily Quote:</Text>
      <Text style={styles.quoteBody}>{quote}</Text>
    </View>
  )
}

export default Quotes