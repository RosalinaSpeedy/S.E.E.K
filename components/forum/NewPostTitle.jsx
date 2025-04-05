import React from 'react'
import { Text } from 'react-native'

import styles from './forum.style'

const NewPostTitle = ({id}) => {
  return (
    <Text style={styles.postTitle}>
        {id ? "Edit Post" : "New Post"}
    </Text>
  )
}

export default NewPostTitle