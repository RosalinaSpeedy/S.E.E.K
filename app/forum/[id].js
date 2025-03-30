import {Text, View, SafeAreaView, ScrollView, ActivityIndicator, RefreshControl, TouchableOpacity} from "react-native";
import {Stack, useRouter, useLocalSearchParams} from 'expo-router';
import { useCallback, useEffect, useState } from "react";

import {MainFooter, MainHeader, CommentBox, CommentsSection, PostTitleCard, PostSection} from '../../components';
import {COLORS, icons, SIZES} from '../../constants';
import { baseUrl } from "../../services/forumDatabaseService";
import axios from "axios";

const Post = () => {
    const router = useRouter();
    const params = useLocalSearchParams();
    const [postId, setPostId] = useState(params.id);
    const [post, setPost] = useState({});

    const fetchPost = async() => {
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
            });
        } catch (error) {
            console.log('Error fetching post:', error);
        }
    };

    useEffect(() => {
        fetchPost()
    }, [])

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <MainHeader/>
            <ScrollView>
                <PostTitleCard
                    title={post.title}
                />
                <PostSection
                    userName={post.userName}
                    body={post.body}
                />
                <CommentsSection/>
                <CommentBox/>
            </ScrollView>
            <MainFooter/>
        </SafeAreaView>
    )
}

export default Post;