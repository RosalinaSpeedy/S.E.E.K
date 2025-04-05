import React from 'react'
import { TouchableOpacity, View, Image } from 'react-native'

import styles from './emotion.style'
import { icons } from '../../constants'

const EmotionOptions = () => {
    return (
        <View style={styles.emotionButtonsContainer}>
            <TouchableOpacity style={styles.emotionButton}>
                <Image
                    style={styles.emotionIcon}
                    source={icons.smiley}
                />
            </TouchableOpacity>
            <TouchableOpacity style={styles.emotionButton}>
                <Image
                    style={styles.emotionIcon}
                    source={icons.neutral}
                />
            </TouchableOpacity>
            <TouchableOpacity style={styles.emotionButton}>
                <Image
                    style={styles.emotionIcon}
                    source={icons.sad}
                />
            </TouchableOpacity>
        </View>
    )
}

export default EmotionOptions