import { useState, useEffect } from 'react';
import { View, ScrollView, SafeAreaView, Text, FlatList } from 'react-native';
import { Stack, useRouter, useFocusEffect } from 'expo-router';

import { COLORS, icons, images, SIZES } from "../../constants";
import { MainMenu, MainFooter, MainHeader, StreakCard, NewClockButton } from "../../components";

import { deleteClock, getAllClocks, setClocks, getTime } from '../../services/clockService';


const ClockList = () => {
    const router = useRouter();
    const [clocks, setClocks] = useState([]);

    //setClocks([{id: 1},{id: 2},{id: 3},{id: 4},{id: 5}, {id: 6},{id: 7},{id:8},{id: 9},{id: 10})

    //not yet:
    useFocusEffect(() => {
        //this doesn't exist yet but yeah:
        getAllClocks().then(allClocks => setClocks(allClocks));

        //console.log(clocks)
    });

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <MainHeader />
            <FlatList
                data={clocks}
                style={{ marginBottom: 15, marginTop: 30 }}
                renderItem={({ item }) => <StreakCard
                    handlePress={() => router.push(`/clocks/${item.id}`)}
                    id={item.id}
                    startDate={item.startDate}
                    relapses={item.relapses}
                    addictionName={item.addictionName}
                />}
                keyExtractor={clock => clock.id}
                ListEmptyComponent={() => (
                    <View><Text>No streaks to display</Text></View>
                )}

                ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
            />
            <NewClockButton handlePress={() => router.push('/addnewclock/new')} />
            <MainFooter />
        </SafeAreaView>
    )
}

export default ClockList;