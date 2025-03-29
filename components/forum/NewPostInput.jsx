import React, { useState, useCallback, useEffect } from 'react'
import { Text, TextInput, View } from 'react-native'
import { useFocusEffect } from 'expo-router';

import styles from './forum.style'

//import { getEntryById } from '../../services/journalService';

const NewPostInput = ({id, textVal, setTextFunction, titleVal, setTitleFunction}) => {
    //const [text, setText] = useState('');
    useEffect(() => {
        if (id) {
            //getEntryById(id).then(entry => setTextFunction(entry?.text));
        }       
        //console.log(entries)
    }, []);
    
    return (
        <View>
            <TextInput value={titleVal} style={styles.titleInputBox} onChangeText={setTitleFunction} placeholder='Title'></TextInput>
            <TextInput value={textVal} style={styles.addPostBox} multiline={true} onChangeText={setTextFunction} placeholder='Post text'></TextInput>
        </View>
    )
}

export default NewPostInput