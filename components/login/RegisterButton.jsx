import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

import styles from './login.style'

const RegisterButton = ({handlePress}) => {
  return (
    <TouchableOpacity style={styles.registerButton} onPress={handlePress}>
        <View>
            <Text style={styles.registerText}>
                Register...
            </Text>
        </View>
    </TouchableOpacity>
  )
}

export default RegisterButton