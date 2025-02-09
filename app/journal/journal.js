import {Text, View, SafeAreaView, ScrollView, ActivityIndicator, RefreshControl, TouchableOpacity} from "react-native";
import {Stack, useRouter, useLocalSearchParams} from 'expo-router';
import { useCallback, useState } from "react";

import {MainFooter, MainHeader, JournalTitle, JournalEntries, AddButton} from '../../components';
import {COLORS, icons, SIZES} from '../../constants';
import styles from "../../styles/search";

const Journal = () => {
    const params = useLocalSearchParams();
    const router = useRouter();

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <MainHeader/>
            <ScrollView>
                <JournalTitle/>
                <JournalEntries/>
            </ScrollView>
            <AddButton/>
            <MainFooter/>
        </SafeAreaView>
    )
}

export default Journal;