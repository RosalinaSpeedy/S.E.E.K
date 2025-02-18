import { Text, View, SafeAreaView, ScrollView, ActivityIndicator, RefreshControl, TouchableOpacity } from "react-native";
import { Stack, useRouter, useLocalSearchParams, useFocusEffect } from 'expo-router';
import { useCallback, useState, useEffect } from "react";

import { MainFooter, MainHeader, AddictionTitle, Tracker, ProgressLegend, RelapseButton, ClockChangeButtons, TrackerCalendar } from '../../components';
import { COLORS, icons, SIZES } from '../../constants';

import { getClockById, getTime, relapse, setPersonalBest } from "../../services/clockService";

const Clock = () => {
    const params = useLocalSearchParams();
    const router = useRouter();
    const [clockState, setClockState] = useState(true);
    const [clock, setClock] = useState({});
    const [time, setTime] = useState({});

    getClockById(params.id).then(clock => setClock(clock));
    getTime(clock.startDate).then(timey => setTime(timey));

    useEffect(() => {
        //this doesn't exist yet but yeah:
        getClockById(params.id).then(clock => setClock(clock));
        getTime(clock.startDate).then(timey => setTime(timey));
        
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
                <RelapseButton handlePress={() => {relapse(clock.id)}}/>
            </ScrollView>
            <MainFooter />
        </SafeAreaView>
    )
}

export default Clock;