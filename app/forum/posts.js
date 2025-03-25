import {Text, View, SafeAreaView, ScrollView, ActivityIndicator, RefreshControl, TouchableOpacity} from "react-native";
import {Stack, useRouter, useLocalSearchParams} from 'expo-router';
import { useCallback, useEffect, useState } from "react";

import {MainFooter, MainHeader, ForumTitle, Posts, AddButton} from '../../components';
import {COLORS, icons, SIZES} from '../../constants';
import { getAllEntries, setEntries } from "../../services/journalService";

const ForumHome = () => {
    const router = useRouter();

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <MainHeader/>
            <ScrollView>
                <ForumTitle/>
                <Posts/>
                
            </ScrollView>
            <AddButton
                handlePress={() => {
                    router.push(`/forum/addnew/blank`);
                }}
            />
            <MainFooter/>
        </SafeAreaView>
    )
}

export default ForumHome;