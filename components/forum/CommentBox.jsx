import React from 'react'
import { Text, View, TextInput } from 'react-native'

import styles from './forum.style'

const CommentBox = () => {
  return (
    <View style={styles.commentBoxContainer}>
        <Text style={styles.commentBoxTitle}>
            Add a comment:
        </Text>
        <TextInput style={styles.commentBox} multiline={true}/>
    </View>
  )
}

export default CommentBox