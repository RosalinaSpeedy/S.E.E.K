import {Text, View, SafeAreaView, ScrollView, ActivityIndicator, RefreshControl, TouchableOpacity} from "react-native";
import {Stack, useRouter, useLocalSearchParams} from 'expo-router';
import { useCallback, useState } from "react";

import {MainFooter, MainHeader, JournalTitle, JournalEntries, AddButton} from '../../components';
import {COLORS, icons, SIZES} from '../../constants';
import styles from "../../styles/search";

const JournalEntry = ({entryData}) => {
    const params = useLocalSearchParams();
    console.log(params)
    const router = useRouter();

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <MainHeader/>
            <ScrollView>
                <Text>date</Text>
                <Text>body</Text>
            </ScrollView>
            <TouchableOpacity><Text>Edit</Text></TouchableOpacity>
            <MainFooter/>
        </SafeAreaView>
    )
}

export default JournalEntry;