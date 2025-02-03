import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'

import styles from './footer.style'

const HomeButton = ({ iconUrl, dimension, handlePress }) => {
  return (
    <TouchableOpacity onPress={handlePress} style={styles.homeButton}>
      <Image 
        source={iconUrl}
        resizeMode='cover'
        style={styles.homeIcon}
      />
    </TouchableOpacity>
  )
}
export default HomeButton;