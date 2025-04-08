import React from 'react'
import { Text, View } from 'react-native'
import Slider from '@react-native-community/slider';

import styles from './quiz.style'

const SeveritySelect = ({setSeverity}) => {
  return (
    <View style={styles.severitySelectContainer}>
        <Text>
        Addiction severity:
        </Text>
        <Slider
            style={{width: '100%', height: 40}}
            minimumValue={0}
            maximumValue={1}
            value={0.5}
            step={0.1}
            minimumTrackTintColor="#818181"
            maximumTrackTintColor="#808080"
            onSlidingComplete={setSeverity}
        />
    </View>
  )
}

export default SeveritySelect 