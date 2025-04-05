import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

import styles from './forum.style'

const CommentButton = ({handlePress}) => {
  return (
    <TouchableOpacity style={styles.commentButton} onPress={handlePress}>
      <Text style={styles.commentButtonText}>Comment</Text>
    </TouchableOpacity>
  )
}

export default CommentButton