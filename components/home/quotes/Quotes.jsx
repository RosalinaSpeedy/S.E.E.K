import React, {useEffect, useState} from 'react'
import { View, Text } from 'react-native'

import { getDay, getQuote, saveDay, saveQuote } from '../../../services/quotesService'

import styles from './quotes.style'

const Quotes = () => {
  //https://stackoverflow.com/questions/75762581/stop-render-until-useeffect-is-done
  const [loadingQuote, setLoadingQuote] = useState(true);
  const [quote, setQuote] = useState([{a: "This", q: "should not appear"}]);

  useEffect(() => {
    getQuote().then(quotey => setQuote(quotey));
    console.log(quote)
    setLoadingQuote(false)
    // saveQuote("a")
    // saveDay("a")
  }, []);

  if (loadingQuote) {
    return null
  }

  return (
    <View style={styles.quoteContainer}>
      <Text style={styles.dailyQuoteTitle}>Daily Quote:</Text>
      <Text style={styles.quoteBody}>{quote[0].a + " - \n" + quote[0].q}</Text>
      {/* //quote[0].a + " - \n" + quote[0].q */}
    </View>
  )
}

export default Quotes