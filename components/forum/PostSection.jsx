import React from 'react'
import { Text, View, TouchableOpacity, Image } from 'react-native'

import styles from './forum.style'
import { icons } from '../../constants'

const PostSection = ({userName, body}) => {
    return (
        <View style={styles.postSectionContainer}>
            <Text style={styles.userTitle}>{userName}</Text>
            <View>
                <Text>
                {body}
                <TouchableOpacity style={styles.readMoreButton}><Text style={styles.readMoreText}>Read more...</Text></TouchableOpacity>
                </Text>
            </View>
        </View>
    )
}

export default PostSection