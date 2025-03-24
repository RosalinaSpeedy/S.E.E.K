import React from 'react'
import { Text, View } from 'react-native'

import styles from './forum.style'

const CommentCard = ({id, user, body}) => {
    return (
        <View style={styles.commentContainer}>
            <Text style={styles.commenterName}>{user + ": "}<Text style={styles.commentBody}>{body}</Text></Text>
        </View>
    )
}

const CommentsSection = () => {
  return (
    <View>
        <Text style={styles.commentSectionTitle}>
            X comments:
        </Text>
        <View style={styles.commentsContainer}>
            <CommentCard
                id={"waaaa"}
                user={"user"}
                body={"lorem ipsum"}
            />
            <CommentCard
                id={"waaaa"}
                user={"user"}
                body={"lorem ipsum"}
            />
            <CommentCard
                id={"waaaa"}
                user={"user"}
                body={"lorem ipsum"}
            />
        </View>
    </View>
  )
}

export default CommentsSection