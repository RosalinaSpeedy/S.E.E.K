import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

import styles from './forum.style'

const PostButton = ({handlePress}) => {
  return (
    <TouchableOpacity style={styles.postButton} onPress={handlePress}>
      <Text style={styles.postText}>Post</Text>
    </TouchableOpacity>
  )
}

export default PostButton