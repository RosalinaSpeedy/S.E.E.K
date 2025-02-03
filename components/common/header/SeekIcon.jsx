import React from 'react'
import { TouchableOpacity, Image } from 'react-native'

import styles from './screenheader.style'

const SeekIcon = ({ iconUrl, dimension, handlePress }) => {
  return (
    <TouchableOpacity onPress={handlePress}>
      <Image 
        source={iconUrl}
        resizeMode='cover'
        style={styles.iconImage}
      />
    </TouchableOpacity>
  )
}

export default SeekIcon