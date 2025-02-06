import React from 'react'
import { Text, View } from 'react-native'

import styles from './clocks.style'

const ProgressLegend = () => {
  return (
    <View style={styles.legendContainer}>
        <View style={styles.legendRecord}>
            <View style={styles.greenDot}/>
            <Text style={styles.legendText}>Current streak: 420/420</Text>
        </View>
        <View style={styles.legendRecord}>
            <View style={styles.orangeDot}/>
            <Text style={styles.legendText}>Goal progress: 420/420</Text>
        </View>
        <View style={styles.legendRecord}>
            <View style={styles.redDot}/>
            <Text style={styles.legendText}>Personal best: 420/420</Text>
        </View>
    </View>
  )
}

export default ProgressLegend