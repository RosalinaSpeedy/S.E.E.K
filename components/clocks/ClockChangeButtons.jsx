import React from 'react'
import { Text, View, TouchableOpacity, Image } from 'react-native'

import { icons } from '../../constants'

import styles from './clocks.style'

const ClockChangeButtons = ({setClockState}) => {
    return (
        <View style={styles.clockChangeButtonContainer}>
            <TouchableOpacity style={styles.calendarChangeButton} onPress={() => setClockState(false)}>
                <Image
                    source={icons.calendar}
                    style={styles.clockChangeImage}
                    resizeMode='cover'
                />
            </TouchableOpacity>
            <TouchableOpacity style={styles.clockChangeButton} onPress={() => setClockState(true)}>
                <Image
                    source={icons.blackclock}
                    style={styles.clockChangeImage}
                    resizeMode='cover'
                />
            </TouchableOpacity>
        </View>
    )
}

export default ClockChangeButtons