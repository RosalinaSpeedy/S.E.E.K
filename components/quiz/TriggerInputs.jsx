import React from 'react'
import { Text, TextInput, View } from 'react-native'


import styles from './quiz.style'

const TriggerInputs = ({setTrigger1, setTrigger2, setTrigger3}) => {
  return (
    <View style={styles.triggerInputsContainer}>
        <Text>
        Triggers:
        </Text>
        <TextInput onChangeText={setTrigger1} style={styles.triggerInput}/>
        <TextInput onChangeText={setTrigger2} style={styles.triggerInput}/>
        <TextInput onChangeText={setTrigger3} style={styles.triggerInput}/> 
    </View>
  )
}

export default TriggerInputs 