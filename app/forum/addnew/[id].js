import {Text, View, SafeAreaView, ScrollView, ActivityIndicator, RefreshControl, TouchableOpacity, TextInput, Alert} from "react-native";
import {Stack, useRouter, useLocalSearchParams} from 'expo-router';
import { useCallback, useEffect, useState } from "react";

import {MainFooter, MainHeader, NewPostTitle, NewPostInput, PostButton, CancelButton} from '../../../components';
import {COLORS, icons, SIZES} from '../../../constants';


const AddPost = ({postData}) => {
    const [text, setText] = useState('');
    const params = useLocalSearchParams();
    //console.log(params)
    const router = useRouter();
    let id = params?.id;
    if (id === 'blank') {
        id = null;
    }

    async function postButtonPress() {
        //console.log("saving...")
        //console.log(text)
        if (!text || text == '') {
            Alert.alert("Enter some post text!", 'Your post is empty!');
            return;
        }
        if (id) {
            //console.log("id found")
            //await editEntry(id, text);
            //console.log("entry edited")
        } else {
            //await saveEntry(text);
        }
        router.push('/forum/posts');
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <MainHeader/>
            <ScrollView>
                <NewPostTitle
                    id={id}
                />
                <NewPostInput
                    id={id}
                    textVal={text}
                    setTextFunction={setText}
                />
                <PostButton 
                    handlePress={() => {
                        postButtonPress();
                    }}
                />
                <CancelButton
                    handlePress={() => {
                        router.back();
                    }}
                />
            </ScrollView>
            <MainFooter/>
        </SafeAreaView>
    )
}

export default AddPost;