import React, { useState, useCallback, useEffect } from 'react'
import { Text, View, Image, TouchableOpacity, FlatList, Alert } from 'react-native'
import { useFocusEffect } from 'expo-router';

import styles from './journal.style'
import { icons } from '../../constants';
import { useRouter } from 'expo-router';

import { deleteEntry, getAllEntries, setEntries } from '../../services/journalService';
import { getAllEmotions } from '../../services/emotionsService';

const placeHolderBody = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet sagittis lacus. Suspendisse justo dui, tempor ut neque mattis, vulputate faucibus ligula. Phasellus vestibulum posuere varius. Maecenas pos...';

function limitCharacters(text) {
    if (text.length >= 212) {
        return text.substring(0, 212) + "..."
    }
    return text;
}

const processDates = async (emotions) => {
    emotions.forEach((date) => {
        const tmpDate = date.id;
        const newDateString = new Date(tmpDate).toLocaleDateString('en-GB')
        date.id = newDateString;
    })
    //console.log(emotions);
    return emotions;
}

const Entry = ({ id, date, body, emotion }) => {
    const router = useRouter();
    const [dayIndex, setDayIndex] = useState(-1);
    const [emotionIcon, setEmotionIcon] = useState(null);
    const [emotions, setEmotions] = useState([]);

    //https://reactnative.dev/docs/alert
    const createTwoButtonAlert = () => {
        Alert.alert('Deleting entry', `You are about to delete entry:\n${date}\n\nYou sure?`, [
            {
                text: `Cancel`,
                onPress: () => { console.log('relapse cancelled') },
                style: 'cancel',
            },
            { text: `Delete`, onPress: () => { deleteEntry(id) } },
        ]);
    }

    useFocusEffect(() => {
        getAllEmotions().then(async (emotions) =>
            setEmotions(await processDates(emotions))
        ).then(() => {
            // console.log(emotions);
            // console.log(date);
            // console.log(emotions.findIndex(e => e.id === date))
            setDayIndex(emotions.findIndex(e => e.id === date))
            //console.log(dayIndex);
            switch (emotions[dayIndex]?.emotion) {
                case "smiley":
                    setEmotionIcon(icons.smiley);
                    break;
                case "neutral":
                    setEmotionIcon(icons.neutral);
                    break;
                case "sad":
                    setEmotionIcon(icons.sad);
                    break;
            }
        })
    })

    return (
        <View style={styles.entryContainer}>
            <TouchableOpacity style={styles.entryCard} onPress={() => router.push(`/journal/${id}`)}>

                <Text style={styles.entryDate}>{date}</Text>
                <Text style={styles.entryBody}>{limitCharacters(body)}</Text>
                <TouchableOpacity style={styles.entryDeleteButton} onPress={() => { createTwoButtonAlert() }}>
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
    //const [emotions, setEmotions] = useState({});


    useFocusEffect(() => {
        getAllEntries().then(allEntries => setEntries(allEntries));
        // getAllEmotions().then(emotionsy => setEmotions(emotionsy));
    });

    return (
        <View>
            <View><FlatList
                data={entries}
                renderItem={({ item }) => <Entry
                    id={item.id}
                    emotion={null}
                    date={item.date}
                    body={item.text}
                />}
                keyExtractor={entry => entry.id}
                ListEmptyComponent={() => (
                    <View><Text>Add an entry</Text></View>
                )}
                scrollEnabled={false}
                style={styles.entriesFlatList}
                ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
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