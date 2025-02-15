import React from 'react'
import { Text, TextInput, View } from 'react-native'


import styles from './quiz.style'

const TriggerInputs = () => {
  return (
    <View style={styles.triggerInputsContainer}>
        <Text>
        Triggers:
        </Text>
        <TextInput style={styles.triggerInput}/>
        <TextInput style={styles.triggerInput}/>
        <TextInput style={styles.triggerInput}/> 
    </View>
  )
}

export default TriggerInputs 