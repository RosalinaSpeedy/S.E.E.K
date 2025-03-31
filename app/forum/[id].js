import { Text, View, SafeAreaView, ScrollView, ActivityIndicator, RefreshControl, TouchableOpacity, Alert } from "react-native";
import { Stack, useRouter, useLocalSearchParams } from 'expo-router';
import { useCallback, useEffect, useState } from "react";

import { MainFooter, MainHeader, CommentBox, CommentsSection, PostTitleCard, PostSection, CommentButton } from '../../components';
import { COLORS, icons, SIZES } from '../../constants';
import { baseUrl, addComment } from "../../services/forumDatabaseService";
import axios from "axios";

const Post = () => {
    const router = useRouter();
    const params = useLocalSearchParams();
    const [postId, setPostId] = useState(params.id);
    const [post, setPost] = useState({});
    const [text, setText] = useState('');
    

    async function commentButtonPress() {
        console.log("commenting...")
        //console.log(text)
        if (!text || text == '') {
            Alert.alert("Enter some comment text!", 'Your comment is empty!');
            return;
        }
        console.log(text)
        await addComment(text, postId);
        router.push(`/forum/${postId}`);
    }


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
    }, [])

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <MainHeader />
            <ScrollView>
                <PostTitleCard
                    title={post.title}
                />
                <PostSection
                    userName={post.userName}
                    body={post.body}
                />
                <CommentsSection
                    comments={post.comments}
                />
                <CommentBox 
                    changeTextFunction={setText}
                />
                <CommentButton
                    handlePress={() => {commentButtonPress()}}
                />
            </ScrollView>
            <MainFooter />
        </SafeAreaView>
    )
}

export default Post;