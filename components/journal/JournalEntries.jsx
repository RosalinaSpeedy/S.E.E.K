import React from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'

import styles from './journal.style'
import { icons } from '../../constants';
import { useRouter } from 'expo-router';

const placeHolderBody = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet sagittis lacus. Suspendisse justo dui, tempor ut neque mattis, vulputate faucibus ligula. Phasellus vestibulum posuere varius. Maecenas pos...';

const Entry = ({entryData}) => {
    const router = useRouter();
    let emotionIcon;
    switch (entryData.emotion) {
        case "smiley":
            emotionIcon = icons.smiley;
            break;
        case "neutral":
            emotionIcon = icons.neutral;
            break;
        case "sad":
            emotionIcon = icons.sad;
            break;
    }
    return (
        <TouchableOpacity style={styles.entryCard} onPress={() => router.push(`/journal/${entryData.id}`)}>
            <View style={styles.entryEmotionContainer}>
                <Image
                    style={styles.entryEmotion}
                    source={emotionIcon}
                    resizeMethod='contain'
                />
            </View>
            <Text style={styles.entryDate}>{entryData.date}</Text>
            <Text style={styles.entryBody}>{entryData.body}</Text>
        </TouchableOpacity>
    )
} 

const JournalEntries = () => {
  return (
    <View>
        <Entry
            entryData={{
                id: 1,
                emotion: "smiley",
                date: "XX/XX/XX",
                body: placeHolderBody
            }}
        />
        <Entry
            entryData={{
                emotion: "neutral",
                date: "XX/XX/XX",
                body: placeHolderBody
            }}
        />
        <Entry
            entryData={{
                emotion: "smiley",
                date: "XX/XX/XX",
                body: placeHolderBody
            }}
        />
        <Entry
            entryData={{
                emotion: "sad",
                date: "XX/XX/XX",
                body: placeHolderBody
            }}
        />
    </View>
  )
}

export default JournalEntries