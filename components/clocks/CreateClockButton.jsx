
import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

import styles from './clocks.style'

const CreateClockButton = ({handlePress}) => {
    return (
        <TouchableOpacity style={styles.createClockButton} onPress={handlePress}>
            <Text style={{fontSize: 18, color: 'white'}}>Create clock</Text>
        </TouchableOpacity>
    )
}

export default CreateClockButton