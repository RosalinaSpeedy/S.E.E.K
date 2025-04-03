import React, { useState, useEffect, useCallback } from 'react'
import { Text, TouchableOpacity, View, Image, FlatList, TouchableWithoutFeedback, Dimensions, Alert } from 'react-native'
import { useFocusEffect, useRouter } from 'expo-router'
import axios from "axios";

import styles from './forum.style'
import AddButton from '../journal/AddButton'
import { icons } from '../../constants'
import { fetchPosts, getTempPosts, baseUrl, getSession } from '../../services/forumDatabaseService'

const TripleDotMenu = ({ postId, userId, dotMenuShown, setDotMenuShown, exited, setExited, postUserId }) => {
    const router = useRouter();
    const deletePost = async () => {
        try {
            await axios.post(`${baseUrl}/deletepost/${postId}`, {

            }, {
                headers: {}
            }).then(response => {
                console.log("deleted posts:")
                console.log(response.data);
                router.push('/forum/posts')
                // AsyncStorage.setItem(KEY + "_TMPPOSTS", JSON.stringify(response.data));
                // console.log("posts saved " + JSON.stringify(response.data))
            });
        } catch (error) {
            console.log('Error deleting posts:', error);
        }
    }
    const editPost = () => {
        router.push(`/forum/addnew/${postId}`)
    }
    const createTwoButtonAlert = () => {
        Alert.alert('Deleting post', `You are about to delete this post: ${postId}\nYou sure?`, [
            {
                text: `Cancel`,
                onPress: () => { console.log('post delete cancelled') },
                style: 'cancel',
            },
            { text: `Delete`, onPress: () => { deletePost() } },
        ]);
    }
    if (dotMenuShown) {
        if (exited) {
            console.log("exiting")
            setDotMenuShown(false);
            setExited(false);
            //setMenuShown(false);
            return null;
        }
        return (
            <View style={styles.tripleDotMenuContainer}>
                {postUserId == userId ? <View style={{ width: '100%' }}>
                    <TouchableOpacity style={styles.tripleDotMenuOption} 
                        onPress={() => {editPost()}}
                    
                    ><View style={styles.optionButton}><Text>Edit</Text></View></TouchableOpacity>
                    <TouchableOpacity
                        style={styles.tripleDotMenuOption}
                        onPress={() => {createTwoButtonAlert()}}

                    ><Text>Delete</Text></TouchableOpacity>
                </View> : <TouchableOpacity style={styles.tripleDotMenuOption}><View style={styles.optionButton}><Text>Report</Text></View></TouchableOpacity>}
            </View>
        )

    } else {
        return null;
    }
    
}

export default TripleDotMenu;