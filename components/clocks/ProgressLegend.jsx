import React from 'react'
import { Text, View } from 'react-native'

import styles from './clocks.style'

const ProgressLegend = ({time, clock}) => {
  return (
    <View style={styles.legendContainer}>
        <View style={styles.legendRecord}>
            <View style={styles.greenDot}/>
            <Text style={styles.legendText}>Current streak: {time.days}/420</Text>
        </View>
        <View style={styles.legendRecord}>
            <View style={styles.orangeDot}/>
            <Text style={styles.legendText}>Goal progress: {time.days}/420</Text>
        </View>
        <View style={styles.legendRecord}>
            <View style={styles.redDot}/>
            <Text style={styles.legendText}>Personal best: {time.days}/420</Text>
        </View>
    </View>
  )
}

export default ProgressLegend