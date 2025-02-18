
import React, { useEffect, useState} from 'react'
import { Text, View, TextInput } from 'react-native'
import { Calendar, Agenda, CalendarList } from 'react-native-calendars'

import styles from './clocks.style'
import { useFocusEffect } from 'expo-router'

const ClockInputs = ({ clock, selected, setSelected, text, setText, goal, setGoal}) => {
    useEffect(() => {
        if (clock.startDate) {
            setSelected(new Date(clock.startDate).toISOString().split('T')[0])
        }
        if (clock.addictionName) { 
            setText(clock.addictionName);
        }
        //console.log(goal)
        if (clock.currentGoal) {
            setGoal(clock.currentGoal);
        } else {
            setGoal(7);
        }
    }, [clock])

    const handleIncorrectChars = (text) => {
        const numericValue = text.replace(/[^0-9]/g, "");
        setGoal(numericValue)
    };

    return (
        <View>
            <Text style={{fontWeight: 'bold', padding: 5}}>
                Clock name:
            </Text>
            <TextInput style={styles.clockNameInput} value={text} onChangeText={setText} />
            <Text style={{fontWeight: 'bold', padding: 5}}>
                Start on:
            </Text>
            <View style={styles.addNewCalendarContainer}>
                <Calendar
                    onDayPress={day => {
                        setSelected(day.dateString);
                        //console.log(day.dateString)
                    }}
                    markedDates={{
                        [selected]: { selected: true, disableTouchEvent: true, selectedDotColor: 'orange' }
                    }}
                />
            </View>
            <View>
                <Text style={{fontWeight: 'bold', padding: 5}}>Streak goal:</Text>
                <TextInput 
                    style={styles.streakNumberInput}
                    keyboardType={"numeric"}
                    value={goal.toString()}
                    onChangeText={handleIncorrectChars}
                    //onChangeText={}
                    
                />
            </View>
        </View>
    )
}

export default ClockInputs;