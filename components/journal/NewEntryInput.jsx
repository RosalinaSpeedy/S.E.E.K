import React, { useState, useCallback, useEffect } from 'react'
import { Text, TextInput } from 'react-native'
import { useFocusEffect } from 'expo-router';

import styles from './journal.style'

import { getEntryById } from '../../services/journalService';

const NewEntryInput = ({id, textVal, setTextFunction}) => {
    //const [text, setText] = useState('');
    useEffect(() => {
        if (id) {
            getEntryById(id).then(entry => setTextFunction(entry?.text));
        }       
        //console.log(entries)
    }, []);
    
    return (
        <TextInput value={textVal} style={styles.addEntryBox} multiline={true} onChangeText={setTextFunction}></TextInput>
    )
}

export default NewEntryInput