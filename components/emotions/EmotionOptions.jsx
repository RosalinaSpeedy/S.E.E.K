import React from 'react'
import { TouchableOpacity, View, Image } from 'react-native'

import styles from './emotion.style'
import { icons } from '../../constants'

import { saveEmotion } from '../../services/emotionsService'
import { router } from 'expo-router'

const EmotionOptions = () => {
    return (
        <View style={styles.emotionButtonsContainer}>
            <TouchableOpacity style={styles.emotionButton} onPress={async () => {
                await saveEmotion("smiley");
                router.push("/");
            }
            }>
                <Image
                    style={styles.emotionIcon}
                    source={icons.smiley}
                />
            </TouchableOpacity>
            <TouchableOpacity style={styles.emotionButton} onPress={async () => {
                await saveEmotion("neutral");
                router.push("/");
            }
            }>
                <Image
                    style={styles.emotionIcon}
                    source={icons.neutral}
                />
            </TouchableOpacity>
            <TouchableOpacity style={styles.emotionButton} onPress={async () => {
                await saveEmotion("sad");
                router.push("/");
            }
            }>
                <Image
                    style={styles.emotionIcon}
                    source={icons.sad}
                />
            </TouchableOpacity>
        </View>
    )
}

export default EmotionOptions