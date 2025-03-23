import React from 'react'
import { Text, TouchableOpacity, View, Image } from 'react-native'

import styles from './forum.style'
import AddButton from '../journal/AddButton'
import { icons } from '../../constants'

const PostEntry = ({title, username, comments}) => {
    return (
        <TouchableOpacity>
            <View style={styles.postCard}>
                <View style={styles.textContainer}>
                    <Text>
                        <Text style={styles.boldUsername}>{username + ":"} </Text>
                        <Text style={styles.postCardTitle}>{title}</Text>
                    </Text>
                    <Text style={styles.commentCount}>
                        {comments.length + " comments"}
                    </Text>
                </View>
                <TouchableOpacity style={styles.tripleDotButton}>
                    <Image
                        source={icons.tripleDots}
                        style={styles.tripleDot}
                    />
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    )
}

const Posts = () => {
  return (
    <View style={styles.postsContainer}>
        <View>
            <PostEntry
                title={"post title"}
                username={"USER"}
                comments={["bing","bang","boom","bop"]}
            />
            <PostEntry
                title={"post title"}
                username={"USER"}
                comments={["bing","bang","boom","bop"]}
            />
            <PostEntry
                title={"post title"}
                username={"USER"}
                comments={["bing","bang","boom","bop"]}
            />
            <PostEntry
                title={"post title"}
                username={"USER"}
                comments={["bing","bang","boom","bop"]}
            />
            <PostEntry
                title={"post title"}
                username={"USER"}
                comments={["bing","bang","boom","bop"]}
            />
            <PostEntry
                title={"post title"}
                username={"USER"}
                comments={["bing","bang","boom","bop"]}
            />
            <PostEntry
                title={"post title"}
                username={"USER"}
                comments={["bing","bang","boom","bop"]}
            />
            <PostEntry
                title={"post title"}
                username={"USER"}
                comments={["bing","bang","boom","bop"]}
            />
        </View>
    </View>
  )
}

export default Posts