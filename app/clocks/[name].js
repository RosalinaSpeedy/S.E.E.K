import {Text, View, SafeAreaView, ScrollView, ActivityIndicator, RefreshControl, TouchableOpacity} from "react-native";
import {Stack, useRouter, useLocalSearchParams} from 'expo-router';
import { useCallback, useState } from "react";

import {MainFooter, MainHeader, AddictionTitle, Tracker, ProgressLegend, RelapseButton, ClockChangeButtons, TrackerCalendar} from '../../components';
import {COLORS, icons, SIZES} from '../../constants';

const Clock = () => {
    const params = useLocalSearchParams();
    const router = useRouter();
    const [clockState, setClockState] = useState(true);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <MainHeader/>
            <ScrollView>
                <AddictionTitle
                    title={params.name}
                />
                <View>
                    {clockState ? <Tracker/> : <TrackerCalendar/>}
                </View>
                <View>
                    <ClockChangeButtons setClockState={setClockState}/>
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