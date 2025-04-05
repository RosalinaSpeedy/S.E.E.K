import { Text, View } from 'react-native'
import { SelectList } from 'react-native-dropdown-select-list'
import React, { useState, useCallback } from 'react'

import styles from './quiz.style'

const addictionTypes = [
    { key: '1', value: 'Smoking' },
    { key: '2', value: 'Pornography' },
    { key: '3', value: 'Alcohol' },
    { key: '4', value: 'Internet' },
    { key: '5', value: 'Gambling' }
]

const AddictionTypeSelect = () => {
    const [selected, setSelected] = useState("");
    return (
        <View style={styles.typeSelectContainer}>
            <Text>
                Addiction type:
            </Text>
            <SelectList 
                setSelected={(val) => setSelected(val)} 
                data={addictionTypes} 
                save="value"
            />
        </View>
    )
}

export default AddictionTypeSelect 