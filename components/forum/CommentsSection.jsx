import React from 'react'
import { Text, View, FlatList } from 'react-native'

import styles from './forum.style'

const CommentCard = ({ id, user, body }) => {
    return (
        <View style={styles.commentContainer}>
            <Text style={styles.commenterName}>{user + ": "}<Text style={styles.commentBody}>{body}</Text></Text>
        </View>
    )
}

const CommentsSection = ({ comments }) => {
    if (!comments) {
        return null;
    } else {
        console.log(comments)
    }
    return (
        <View>
            <Text style={styles.commentSectionTitle}>
                {comments.length + " comments:"}
            </Text>
            <View style={styles.commentsContainer}>
                <FlatList
                    data={comments}
                    renderItem={({ item }) => <CommentCard
                        id={item.id}
                        user={item.userName}
                        body={item.body}
                    />}
                    keyExtractor={comment => comment.id}
                    ListEmptyComponent={() => (
                        <View><Text>No comments to display</Text></View>
                    )}
                    scrollEnabled={false}
                    style={styles.commentsFlatList}
                    ItemSeparatorComponent={() => <View style={{ height: 5 }} />}
                >
                </FlatList>
            </View>
        </View>
    )
}

export default CommentsSection