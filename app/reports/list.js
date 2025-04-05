import { Text, View, SafeAreaView, ScrollView, ActivityIndicator, TextInput, TouchableOpacity, Alert } from "react-native";
import { Stack, useRouter, useLocalSearchParams, useFocusEffect } from 'expo-router';
import { useCallback, useEffect, useState } from "react";

import { MainFooter, MainHeader, ReportedPostsList, ReportedPostsTitle, ApprovalOptions } from '../../components';
import { COLORS, icons, SIZES } from '../../constants';

const List = () => {

    const router = useRouter();

    // useEffect(() => {
        
    // }, []);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <MainHeader />
            <ScrollView>
                <ReportedPostsTitle/>
                <ReportedPostsList/>
                
            </ScrollView>
            <MainFooter />
        </SafeAreaView>
    )
}

export default List;