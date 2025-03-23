import React, {useEffect, useState} from 'react'
import { View, Text } from 'react-native'

import { getDay, getQuote, saveDay, saveQuote } from '../../../services/quotesService'

import styles from './quotes.style'

const Quotes = ({ quotey }) => {
  const [quote, setQuote] = useState([{a: "This", q: "should not appear"}]);

  useEffect(() => {
    getQuote().then(quote => setQuote(quote));
    console.log
  }, []);

  return (
    <View style={styles.quoteContainer}>
      <Text style={styles.dailyQuoteTitle}>Daily Quote:</Text>
      <Text style={styles.quoteBody}>{quote[0].a + " - \n" + quote[0].q}</Text>
      {/* //quote[0].a + " - \n" + quote[0].q */}
    </View>
  )
}

export default Quotes