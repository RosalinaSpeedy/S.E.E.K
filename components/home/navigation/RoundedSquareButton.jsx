import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { icons } from '../../../constants'

import styles from './mainnav.style'

const RoundedSquareButton = ({iconUrl, title, handlePress}) => {
  return (
    <TouchableOpacity
      style={title === "panic!" ? styles.panicButton : styles.roundedButton}
      onPress={handlePress}
    >
      <Image
        source={iconUrl}
        resizeMode='cover'
        style={styles.roundedButtonIcon}
      />
      <Text>
        <Text style={styles.roundedButtonTitleBold}>{title.slice(0, 1)}</Text>
        <Text style={styles.roundedButtonTitle}>{title.slice(1, title.length)}</Text>
      </Text>
    </TouchableOpacity>
  )
}

export default RoundedSquareButton