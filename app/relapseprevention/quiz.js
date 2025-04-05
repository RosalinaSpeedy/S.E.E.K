import {Text, View, SafeAreaView, ScrollView, ActivityIndicator, RefreshControl, TouchableOpacity} from "react-native";
import {Stack, useRouter, useLocalSearchParams} from 'expo-router';
import { useCallback, useState } from "react";

import {MainFooter, MainHeader, QuizHeading, AddictionTypeSelect, TriggerInputs, SeveritySelect, GenerateButton, BackButton} from '../../components';
import {COLORS, icons, SIZES} from '../../constants';
import styles from "../../styles/search";

const Quiz = () => {
    const params = useLocalSearchParams();
    const router = useRouter();

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <MainHeader/>
            <ScrollView>
                <QuizHeading/>
                <AddictionTypeSelect/>
                <TriggerInputs/>
                <SeveritySelect/>
                <GenerateButton/>
            </ScrollView>
            <BackButton handlePress={() => router.back()}/>
            <MainFooter/>
        </SafeAreaView>
    )
}

export default Quiz;