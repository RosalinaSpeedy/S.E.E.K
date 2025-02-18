import { Text, View, SafeAreaView, ScrollView, ActivityIndicator, TextInput, TouchableOpacity, Alert } from "react-native";
import { Stack, useRouter, useLocalSearchParams, useFocusEffect } from 'expo-router';
import { useCallback, useEffect, useState } from "react";

import { MainFooter, MainHeader, CancelButton, AddNewTitle, ClockInputs, CreateClockButton } from '../../components';
import { COLORS, icons, SIZES } from '../../constants';

import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

import { saveClock, editClock, getClockById } from "../../services/clockService";

const AddNew = () => {
    const params = useLocalSearchParams();
    const router = useRouter();
    const [text, setText] = useState("Never quit");
    const today = new Date()
    //console.log(today)
    const todayString = today.toISOString().split('T')[0]
    //console.log(todayString)
    const [selected, setSelected] = useState(todayString);
    const [clock, setClock] = useState({});
    const [goal, setGoal] = useState(7);
    let id = params?.id;

    useEffect(() => {
        if (id === 'new') {
            id = null;
        } else if (id) {
            getClockById(id).then(clocky => setClock(clocky));
            //console.log(clock)
            
        }
    }, []);

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
        console.log(id)
        if (id && id !== "new") {
            console.log("id found")
            console.log(selected)
            await editClock(id, selected, text, goal);
            console.log("clock edited")
        } else {
            console.log("id not found");
            await saveClock(selected, [], text, goal);
            console.log("clock created")
        }
        router.push('/clocks/list');
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <MainHeader />
            <ScrollView>
                <AddNewTitle clock={clock}/>
                <ClockInputs 
                    clock={clock} 
                    text={text} 
                    setText={setText}
                    selected={selected} 
                    setSelected={setSelected} 
                    goal={goal}
                    setGoal={setGoal}
                />
                <CreateClockButton clock={clock} handlePress={() => saveButtonPress()}/>
                <CancelButton clock={clock} handlePress={() => router.back()} />
            </ScrollView>
            <MainFooter />
        </SafeAreaView>
    )
}

export default AddNew;