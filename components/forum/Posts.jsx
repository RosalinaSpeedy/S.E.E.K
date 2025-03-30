import React, { useState, useEffect, useCallback } from 'react'
import { Text, TouchableOpacity, View, Image, FlatList } from 'react-native'
import { useFocusEffect, useRouter } from 'expo-router'
import axios from "axios";

import styles from './forum.style'
import AddButton from '../journal/AddButton'
import { icons } from '../../constants'
import { fetchPosts, getTempPosts, baseUrl } from '../../services/forumDatabaseService'

const PostEntry = ({ id, title, userName, comments }) => {
    return (
        <TouchableOpacity onPress={() => router.push(`/forum/${id}`)}>
            <View style={styles.postCard}>
                <View style={styles.textContainer}>
                    <Text>
                        <Text style={styles.boldUsername}>{userName + ":"} </Text>
                        <Text style={styles.postCardTitle}>{title}</Text>
                    </Text>
                    <Text style={styles.commentCount}>
                        {comments.length + " comments"}
                    </Text>
                </View>
                <TouchableOpacity style={styles.tripleDotButton}>
                    <Image
                        source={icons.tripleDots}
                        style={styles.tripleDot}
                    />
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    )
}

const Posts = () => {
    const router = useRouter();
    const [posts, setPosts] = useState([]);
    const [loadingPosts, setLoadingPosts] = useState(true);

    const fetchPosts = async() => {
        try {
            await axios.get(`${baseUrl}/getposts`, {
                
            }, {
                headers: {}
            }).then(response => {
                console.log("GOT POSTS RAW:")
                console.log(response.data);
                console.log(response.data[0].body)
                // AsyncStorage.setItem(KEY + "_TMPPOSTS", JSON.stringify(response.data));
                // console.log("posts saved " + JSON.stringify(response.data))
                setPosts(response.data);
                setLoadingPosts(false);
            });
        } catch (error) {
            console.log('Error fetching posts:', error);
        }
    };

    useEffect(() => {
        fetchPosts()
    }, [])

    // useFocusEffect(() => {
    //     getTempPosts().then(allPosts => setPosts(allPosts)).then(
    //         console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA")
            
    //     );
        
    //     // (async () => {
            
            
    //     // })()
        
    // });

    //https://dev.to/jasmin/how-to-use-async-function-in-useeffect-5efc
    
    console.log(loadingPosts)
    if (loadingPosts) {
        return null;
    }
    return (
        <View style={styles.postsContainer}>
            <FlatList
                data={posts}
                renderItem={({ item }) => <PostEntry
                    title={item.title}
                    userName={item.userName}
                    comments={["big", "bada", "bing", "bada", "boom"]}
                    id={item.id}
                />}
                keyExtractor={post => post.id}
                ListEmptyComponent={() => (
                    <View><Text>No posts to display</Text></View>
                )}
                scrollEnabled={false}
                style={styles.postsFlatList}
                ItemSeparatorComponent={() => <View style={{ height: 5 }} />}
            >
            </FlatList>
        </View>
    )
}

export default Posts