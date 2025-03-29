import { Text, View, SafeAreaView, ScrollView, ActivityIndicator, RefreshControl, TouchableOpacity, TextInput, Alert } from "react-native";
import { Stack, useRouter, useLocalSearchParams } from 'expo-router';
import { useCallback, useEffect, useState } from "react";

import { MainFooter, MainHeader, NewPostTitle, NewPostInput, PostButton, CancelButton } from '../../../components';
import { COLORS, icons, SIZES } from '../../../constants';
import { addPost } from "../../../services/forumDatabaseService";


const AddPost = ({ postData }) => {
    const [text, setText] = useState('');
    const [title, setTitle] = useState('');
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
            console.log(title)
            console.log(text)
            await addPost(title, text);
        }
        router.push('/forum/posts');
    }


    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <MainHeader />
            <ScrollView>
                <NewPostTitle
                    id={id}
                />
                <NewPostInput
                    id={id}
                    titleVal={title}
                    textVal={text}
                    setTextFunction={setText}
                    setTitleFunction={setTitle}
                />
                <PostButton
                    handlePress={() => {
                        postButtonPress();
                    }}
                    type="AddPost"
                />
                <CancelButton
                    handlePress={() => {
                        router.back();
                    }}
                />
            </ScrollView>
            <MainFooter />
        </SafeAreaView>
    )
}

export default AddPost;