import React, { useState, useCallback, useEffect } from 'react'
import { Text, TextInput, View } from 'react-native'
import { useFocusEffect } from 'expo-router';
import axios from 'axios';
import { baseUrl } from '../../services/forumDatabaseService';

import styles from './forum.style'

//import { getEntryById } from '../../services/journalService';

const NewPostInput = ({id, textVal, setTextFunction, titleVal, setTitleFunction}) => {
    //const [post, setPost] = useState({});

    const fetchPost = async (postId) => {
        console.log(postId);
        try {
            await axios.get(`${baseUrl}/getpost/${postId}`, {

            }, {
                headers: {}
            }).then(response => {
                console.log(response.data[0]);
                setTextFunction(response.data[0].body);
                setTitleFunction(response.data[0].title);
            });
        } catch (error) {
            console.log('Error fetching post:', error);
        }
    };
    useEffect(() => {
        if (id) {
            console.log(id);
            fetchPost(id);
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