import React, {useState, useCallback} from 'react'
import { Text, View, Image, TouchableOpacity, FlatList } from 'react-native'
import { useFocusEffect } from 'expo-router';

import styles from './journal.style'
import { icons } from '../../constants';
import { useRouter } from 'expo-router';

import { deleteEntry, getAllEntries, setEntries } from '../../services/journalService';

const placeHolderBody = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet sagittis lacus. Suspendisse justo dui, tempor ut neque mattis, vulputate faucibus ligula. Phasellus vestibulum posuere varius. Maecenas pos...';

function limitCharacters(text) {
    if (text.length >= 212) {
        return text.substring(0, 212) + "..."
    }
    return text;
}

const Entry = ({ id, date, body, emotion }) => {
    const router = useRouter();
    let emotionIcon;
    switch (emotion) {
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
        <View style={styles.entryContainer}>
            <TouchableOpacity style={styles.entryCard} onPress={() => router.push(`/journal/${id}`)}>
                
                <Text style={styles.entryDate}>{date}</Text>
                <Text style={styles.entryBody}>{limitCharacters(body)}</Text>
                <TouchableOpacity style={styles.entryDeleteButton} onPress={() => {deleteEntry(id)}}>
                    <Text style={styles.entryDeleteText}>Delete</Text>
                </TouchableOpacity>
                <View style={styles.entryEmotionContainer}>
                    <Image
                        style={styles.entryEmotion}
                        source={emotionIcon}
                    />
                </View>
            </TouchableOpacity>
        </View>
    )
}

const JournalEntries = () => {
    const [entries, setEntries] = useState([]);

    useFocusEffect(() => {
        getAllEntries().then(allEntries => setEntries(allEntries));
        //console.log(entries)
    });

    return (
        <View>
            <View><FlatList
                data={entries}
                renderItem={({item}) => <Entry
                    id={item.id}
                    emotion={item.emotion}
                    date={item.date}
                    body={item.text}
                />}
                keyExtractor={entry => entry.id}
                ListEmptyComponent={() => (
                    <View><Text>Add an entry</Text></View>
                )}
                scrollEnabled={false}
                style={styles.entriesFlatList}
                ItemSeparatorComponent={() => <View style={{height: 20}} />}
            /></View>
            {/* <Entry
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
            /> */}
        </View>
    )
}

export default JournalEntries