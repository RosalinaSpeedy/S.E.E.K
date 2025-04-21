import {Text, View, SafeAreaView, ScrollView, ActivityIndicator, RefreshControl, TouchableOpacity} from "react-native";
import {Stack, useRouter, useLocalSearchParams} from 'expo-router';
import { useCallback, useEffect, useState } from "react";

import {MainFooter, MainHeader, JournalTitle, JournalEntries, AddButton} from '../../components';
import {COLORS, icons, SIZES} from '../../constants';
import { getAllEntries, setEntries } from "../../services/journalService";

const Journal = () => {
    const params = useLocalSearchParams();
    const router = useRouter();

    const [entries, setEntries] = useState([]);

    useEffect(() => {
        getAllEntries().then(allEntries => setEntries(allEntries));
    }, []);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <MainHeader/>
            <ScrollView>
                <JournalTitle/>
                <JournalEntries/>
            </ScrollView>
            <AddButton
                handlePress={() => {
                    router.push(`/journal/add`);
                }}
            />
            
            <MainFooter/>
        </SafeAreaView>
    )
}

export default Journal;