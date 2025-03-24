import React from 'react'
import { Text, View, TouchableOpacity, Image } from 'react-native'

import styles from './forum.style'
import { icons } from '../../constants'

const PostTitleCard = () => {
    return (
        <View style={styles.inlinePostTitleCard}>
            <Text style={styles.bigPostTitle}>
                Post title
            </Text>
            <TouchableOpacity style={styles.tripleDotButton}>
                <Image
                    source={icons.tripleDots}
                    style={styles.tripleDot}
                />
            </TouchableOpacity>
        </View>
    )
}

export default PostTitleCard