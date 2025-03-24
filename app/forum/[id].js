import {Text, View, SafeAreaView, ScrollView, ActivityIndicator, RefreshControl, TouchableOpacity} from "react-native";
import {Stack, useRouter, useLocalSearchParams} from 'expo-router';
import { useCallback, useEffect, useState } from "react";

import {MainFooter, MainHeader, CommentBox, CommentsSection, PostTitleCard, PostSection} from '../../components';
import {COLORS, icons, SIZES} from '../../constants';
import { getAllEntries, setEntries } from "../../services/journalService";

const Journal = () => {
    const router = useRouter();

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <MainHeader/>
            <ScrollView>
                <PostTitleCard/>
                <PostSection/>
                <CommentsSection/>
                <CommentBox/>
            </ScrollView>
            <MainFooter/>
        </SafeAreaView>
    )
}

export default Journal;