import { Text, View, SafeAreaView, ScrollView, ActivityIndicator, TextInput, TouchableOpacity, Alert } from "react-native";
import { Stack, useRouter, useLocalSearchParams, useFocusEffect } from 'expo-router';
import { useCallback, useEffect, useState } from "react";

import { MainFooter, MainHeader, PostSection, ReportedPostTitle } from '../../components';
import { COLORS, icons, SIZES } from '../../constants';

import axios from "axios";
import { baseUrl } from "../../services/forumDatabaseService";

const ReportedPost = () => {

    const router = useRouter();
    const [post, setPost] = useState({});

    const fetchPost = async () => {
        try {
            await axios.get(`${baseUrl}/getpost/${postId}`, {

            }, {
                headers: {}
            }).then(response => {
                console.log("GOT POST")
                console.log(response.data);
                console.log(response.data[0].body)
                // AsyncStorage.setItem(KEY + "_TMPPOSTS", JSON.stringify(response.data));
                // console.log("posts saved " + JSON.stringify(response.data))
                setPost(response.data[0]);
                console.log(post.comments)
            });
        } catch (error) {
            console.log('Error fetching post:', error);
        }
    };

    useEffect(() => {
        fetchPost()
        //getSession().then(session => setUserId(JSON.parse(session).id));
    }, [])

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <MainHeader />
            <ScrollView>
                <ReportedPostTitle
                    title={post.title}
                />
                <PostSection
                    userName={post.userName}
                    body={post.body}
                />
                <ApprovalOptions
                    handleTickPress={() => {

                    }}
                    handleCrossPress={() => {
                        
                    }}
                />
            </ScrollView>
            <MainFooter />
        </SafeAreaView>
    )
}

export default ReportedPost;