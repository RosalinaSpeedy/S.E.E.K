import {Text, View, SafeAreaView, ScrollView, ActivityIndicator, RefreshControl, TouchableOpacity} from "react-native";
import {Stack, useRouter, useLocalSearchParams} from 'expo-router';
import { useCallback, useState } from "react";

import {MainFooter, MainHeader, AddictionTitle, Tracker, ProgressLegend, RelapseButton} from '../../components';
import {COLORS, icons, SIZES} from '../../constants';

const tabs = ["About", "Qualifications", "Responsibilities"];

const Clock = () => {
    const params = useLocalSearchParams();
    const router = useRouter();
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <MainHeader/>
            <ScrollView>
                <AddictionTitle
                    title={params.name}
                />
                <View>
                    <Tracker/>
                </View>
                <View>
                    <ProgressLegend/>
                </View>
                <RelapseButton/>
            </ScrollView>
            <MainFooter/>
        </SafeAreaView>
    )
}

export default Clock;