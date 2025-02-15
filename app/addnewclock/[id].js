import { Text, View, SafeAreaView, ScrollView, ActivityIndicator, TextInput, TouchableOpacity, Alert } from "react-native";
import { Stack, useRouter, useLocalSearchParams } from 'expo-router';
import { useCallback, useState } from "react";

import { MainFooter, MainHeader, CancelButton, AddNewTitle, ClockInputs, CreateClockButton } from '../../components';
import { COLORS, icons, SIZES } from '../../constants';

import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

import { saveClock, editClock } from "../../services/clockService";

const AddNew = () => {
    const params = useLocalSearchParams();
    const router = useRouter();
    const [text, setText] = useState("Never quit");
    const today = new Date()
    //console.log(today)
    const todayString = today.toISOString().split('T')[0]
    //console.log(todayString)
    const [selected, setSelected] = useState(todayString);

    let id = params?.id;
    if (id === 'new') {
        id = null;
    }

    async function saveButtonPress() {
        console.log("saving...")
        console.log(text)
        if (!text || text == '') {
            Alert.alert("Enter a name!", 'Your clock does not have a name!');
            return;
        }
        if (!selected) {
            Alert.alert("Error with date!", 'There was a problem getting the date!');
            return;
        }
        console.log("date and name ok")
        if (id) {
            console.log("id found")
            await editClock(id, selected, [], text);
            console.log("clock edited")
        } else {
            console.log("id not found");
            await saveClock(selected, [], text);
            console.log("clock created")
        }
        router.push('/clocks/list');
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <MainHeader />
            <ScrollView>
                <AddNewTitle />
                <ClockInputs text={text} setText={setText} selected={selected} setSelected={setSelected} />
                <CreateClockButton handlePress={() => saveButtonPress()}/>
                <CancelButton handlePress={() => router.back()} />
            </ScrollView>
            <MainFooter />
        </SafeAreaView>
    )
}

export default AddNew;