import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

import styles from './login.style'

const LoginButton = ({handlePress, type}) => {
  return (
    <View>
        <TouchableOpacity style={styles.loginButton} onPress={handlePress}>
            <Text style={styles.loginText}>{type}</Text>
        </TouchableOpacity>
    </View>
  )
}

export default LoginButton