import React from 'react'
import { Text, View, TouchableOpacity, Image } from 'react-native'

import styles from './forum.style'
import { icons } from '../../constants'

const PostSection = () => {
    return (
        <View style={styles.postSectionContainer}>
            <Text style={styles.userTitle}>user</Text>
            <View>
                <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet sagittis lacus. Suspendisse justo dui, tempor ut neque mattis, vulputate faucibus ligula. Phasellus vestibulum posuere varius. Maecenas posuere malesuada justo nec sagittis. Vivamus eleifend dignissim maximus. Suspendisse efficitur cursus lobortis. Donec id luctus leo. Curabitur justo nisl, imperdiet et mau...
                <TouchableOpacity style={styles.readMoreButton}><Text style={styles.readMoreText}>Read more...</Text></TouchableOpacity>
                </Text>
            </View>
        </View>
    )
}

export default PostSection