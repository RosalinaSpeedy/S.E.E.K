import React, { useEffect, useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

import styles from './panic.style'
import { router, useRouter, useFocusEffect } from 'expo-router'
import { time } from '@tensorflow/tfjs'

const renderStep = (step, setStep, time) => {
    const router = useRouter();
    switch (step) {
        case 1:
            return (
                <View style={styles.panicStepContainer}>
                    <Text style={styles.panicStepTitle}>Hi there</Text>
                    <Text style={styles.panicStepBody}>Going through a rough spot?</Text>
                    <TouchableOpacity
                        onPress={() => setStep(step + 1)}
                        style={styles.nextStepButton}
                    >
                        <Text style={styles.nextStepText}>Yeah; I need some help</Text>
                    </TouchableOpacity>
                </View>
            )
        case 2:
            return (
                <View style={styles.panicStepContainer}>
                    <Text style={styles.panicStepTitle}>No shame in that</Text>
                    <Text style={styles.panicStepBody}>We are here. You ready to pull yourself out of this?</Text>
                    <TouchableOpacity
                        onPress={() => setStep(step + 1)}
                        style={styles.nextStepButton}
                    >
                        <Text style={styles.nextStepText}>I'm ready.</Text>
                    </TouchableOpacity>
                </View>
            )
        case 3:
            return (
                <View style={styles.panicStepContainer}>
                    <Text style={styles.panicStepTitle}>Put in the effort</Text>
                    <Text style={styles.panicStepBody}>Right now isn't where you fall - ok?</Text>
                    <TouchableOpacity
                        onPress={() => setStep(step + 1)}
                        style={styles.nextStepButton}
                    >
                        <Text style={styles.nextStepText}>OK.</Text>
                    </TouchableOpacity>
                </View>
            )
        case 4:
            return (
                <View style={styles.panicStepContainer}>
                    <Text style={styles.panicStepTitle}>Take a moment...</Text>
                    <Text style={styles.panicStepBody}>Now breathe... Take some deep breaths and close your eyes, and let your cravings sit with you; don't try and force them out of your head. Just let them come, then let them go again.</Text>
                    <TouchableOpacity
                        onPress={() => setStep(step + 1)}
                        style={time > 0 ? styles.disabledButton : styles.nextStepButton}
                        disabled={time > 0 ? true : false}
                    >
                        <Text style={styles.nextStepText}>{`(${time}) Light work`}</Text>
                    </TouchableOpacity>
                </View>
            )
        case 5:
            return (
                <View style={styles.panicStepContainer}>
                    <Text style={styles.panicStepTitle}>Keep it up - our brave warrior</Text>
                    <Text style={styles.panicStepBody}>Ready to move on? Feel free to sit wth us until your cravings aren't beating you any more - we are always here to help.</Text>
                    <TouchableOpacity
                        onPress={() => setStep(step + 1)}
                        style={styles.nextStepButton}
                    >
                        <Text style={styles.nextStepText}>I can do this.</Text>
                    </TouchableOpacity>
                </View>
            )
        case 6:
            return (
                <View style={styles.panicStepContainer}>
                    <Text style={styles.panicStepTitle}>You're a strong one</Text>
                    <Text style={styles.panicStepBody}>Well done for getting over that one. We know it can be tough, but we are proud of you!</Text>
                    <TouchableOpacity
                        onPress={() => setStep(step + 1)}
                        style={styles.nextStepButton}
                    >
                        <Text style={styles.nextStepText}>Now go forth!</Text>
                    </TouchableOpacity>
                </View>
            )
        default:
            router.push('/');
    }
}

const PanicMenu = ({ step, setStep }) => {
    const [time, setTime] = useState(30);

    useFocusEffect(() => {
        if (step == 4 && time > 0) {
            setTimeout(() => setTime(time - 1), 1000);
        }
    });
    return (
        renderStep(step, setStep, time)
    )
}

export default PanicMenu