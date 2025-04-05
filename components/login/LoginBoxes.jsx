import React from 'react'
import { Text, View, TextInput } from 'react-native'

import styles from './login.style'
//https://medium.com/@chaudharyalinawazz/building-a-login-screen-in-react-native-a-step-by-step-guide-f90b10aea4ec
const LoginBoxes = ({onPasswordChangeFunction, onEmailChangeFunction}) => {
  return (
    <View style={styles.loginInputContainer}>
        <TextInput
            style={styles.loginInput}
            placeholder='Email'
            keyboardType="email-address"
            onChangeText={onEmailChangeFunction}
        />
        <TextInput
            style={styles.loginInput}
            placeholder='Password'
            secureTextEntry
            onChangeText={onPasswordChangeFunction}
        />
    </View>
  )
}

export default LoginBoxes