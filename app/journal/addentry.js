import {Text, View, SafeAreaView, ScrollView, ActivityIndicator, RefreshControl, TouchableOpacity, TextInput} from "react-native";
import {Stack, useRouter, useLocalSearchParams} from 'expo-router';
import { useCallback, useState } from "react";

import {MainFooter, MainHeader, JournalTitle, JournalEntries, AddButton, NewEntryTitle, NewEntryInput, SaveButton, CancelButton} from '../../components';
import {COLORS, icons, SIZES} from '../../constants';
import styles from "../../styles/search";

const AddEntry = ({entryData}) => {
    const params = useLocalSearchParams();
    console.log(params)
    const router = useRouter();

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <MainHeader/>
            <ScrollView>
                <NewEntryTitle/>
                <NewEntryInput/>
                <SaveButton 
                    handlePress={() => {
                        router.back();
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