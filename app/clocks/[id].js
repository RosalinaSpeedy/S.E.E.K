import { Text, View, SafeAreaView, ScrollView, ActivityIndicator, RefreshControl, TouchableOpacity, Alert } from "react-native";
import { Stack, useRouter, useLocalSearchParams, useFocusEffect } from 'expo-router';
import { useCallback, useState, useEffect } from "react";

import { MainFooter, MainHeader, AddictionTitle, Tracker, ProgressLegend, RelapseButton, ClockChangeButtons, TrackerCalendar } from '../../components';
import { COLORS, icons, SIZES } from '../../constants';

import { getClockById, getTime, relapse, setPersonalBest, updateStreak } from "../../services/clockService";

const Clock = () => {
    const params = useLocalSearchParams();
    const router = useRouter();
    const [clockState, setClockState] = useState(true);
    const [clock, setClock] = useState({});
    const [time, setTime] = useState({});

    //https://reactnative.dev/docs/alert
    const createTwoButtonAlert = (clock) => {
        Alert.alert('You ok?', `You are about to log a relapse for:\n${clock.addictionName}\n\nYou sure?`, [
            {
                text: `Cancel`,
                onPress: () => { console.log('relapse cancelled') },
                style: 'cancel',
            },
            { text: `I'm sure`, onPress: () => relapse(clock.id) },
        ]);
    }

    getClockById(params.id).then(clock => setClock(clock));
    getTime(clock.startDate).then(timey => setTime(timey));

    useEffect(() => {
        //this doesn't exist yet but yeah:
        getClockById(params.id).then(clock => setClock(clock));
        //console.log(clock.relapses)
        if (clock?.relapses?.length > 0 && clock) {
            getTime(clock.relapses[clock.relapses.length - 1]).then(timey => setTime(timey));
        } else {
            getTime(clock.startDate).then(timey => setTime(timey));
        }
        if (time.days > clock.currentStreak) {
            //console.log("updating PB")
            updateStreak(clock.id, clock.currentStreak + 7).then(clock => setClock(clock))
        }
        //console.log(clocks)

    });

    useFocusEffect(() => {
        //console.log(clock)
        //console.log(time)
        if (time.days > clock.personalBest) {
            //console.log("updating PB")
            setPersonalBest(clock.id).then(clock => setClock(clock))
        }
    })

    if (time.days < 0) {
        //console.log("found negative days")
        let tmpTime = time;
        tmpTime.days = 0;
        setTime(tmpTime);
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <MainHeader />
            <ScrollView>
                <AddictionTitle
                    title={clock.addictionName}
                />
                <View>
                    {clockState ? <Tracker
                        time={time}
                        clock={clock}
                    // personalBestPercentage={40}
                    // goalProgressPercentage={68}
                    // currentStreakPercentage={100}
                    /> : <TrackerCalendar />}
                </View>
                <View>
                    <ClockChangeButtons setClockState={setClockState} />
                </View>
                <View>
                    <ProgressLegend
                        time={time}
                        clock={clock}
                    />
                </View>
                <RelapseButton handlePress={() => { createTwoButtonAlert(clock) }} />
            </ScrollView>
            <MainFooter />
        </SafeAreaView>
    )
}

export default Clock;