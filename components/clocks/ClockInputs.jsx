
import React from 'react'
import { Text, View, TextInput } from 'react-native'
import { Calendar, Agenda, CalendarList } from 'react-native-calendars'

import styles from './clocks.style'

const ClockInputs = ({ selected, setSelected, text, setText }) => {
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
        </View>
    )
}

export default ClockInputs;