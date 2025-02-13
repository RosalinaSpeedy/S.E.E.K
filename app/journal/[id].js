import {Text, View, SafeAreaView, ScrollView, ActivityIndicator, RefreshControl, TouchableOpacity, TextInput, Alert} from "react-native";
import {Stack, useRouter, useLocalSearchParams} from 'expo-router';
import { useCallback, useEffect, useState } from "react";

import {MainFooter, MainHeader, JournalTitle, JournalEntries, AddButton, NewEntryTitle, NewEntryInput, SaveButton, CancelButton} from '../../components';
import {COLORS, icons, SIZES} from '../../constants';
import styles from "../../styles/search";
import { editEntry, getEntryById, saveEntry } from "../../services/journalService";

const AddEntry = ({entryData}) => {
    const [text, setText] = useState('');
    const params = useLocalSearchParams();
    //console.log(params)
    const router = useRouter();
    let id = params?.id;
    if (id === 'add') {
        id = null;
    }

    async function saveButtonPress() {
        console.log("saving...")
        console.log(text)
        if (!text || text == '') {
            Alert.alert("Enter an entry!", 'Your entry is empty!');
            return;
        }
        if (id) {
            console.log("id found")
            await editEntry(id, text);
            console.log("entry edited")
        } else {
            await saveEntry(text);
        }
        router.push('/journal/journal');
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <MainHeader/>
            <ScrollView>
                <NewEntryTitle
                    id={id}
                />
                <NewEntryInput
                    id={id}
                    textVal={text}
                    setTextFunction={setText}
                />
                <SaveButton 
                    handlePress={() => {
                        saveButtonPress();
                    }}
                />
                <CancelButton
                    handlePress={() => {
                        router.back();
                    }}
                />
            </ScrollView>
            <MainFooter/>
        </SafeAreaView>
    )
}

export default AddEntry;