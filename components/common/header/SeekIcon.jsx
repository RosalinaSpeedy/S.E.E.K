import React from 'react'
import { TouchableOpacity, Image, View } from 'react-native'

import styles from './screenheader.style'

const SeekIcon = ({ iconUrl, dimension, handlePress }) => {
  return (
    <View>
        <TouchableOpacity onPress={handlePress} style={styles.buttonContainer}>
        <Image 
            source={iconUrl}
            resizeMode='cover'
            style={styles.iconImage}
        />
        </TouchableOpacity>
    </View>
  )
}

export default SeekIcon