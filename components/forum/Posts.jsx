import React, { useState, useEffect, useCallback } from 'react'
import { Text, TouchableOpacity, View, Image, FlatList, TouchableWithoutFeedback, Dimensions, Alert } from 'react-native'
import { useFocusEffect, useRouter } from 'expo-router'
import axios from "axios";

import styles from './forum.style'
import AddButton from '../journal/AddButton'
import { icons } from '../../constants'
import { fetchPosts, getTempPosts, baseUrl, getSession } from '../../services/forumDatabaseService'

const TripleDotMenu = ({ postId, userId, dotMenuShown, setDotMenuShown, exited, setExited, menuShown, setMenuShown, postUserId }) => {
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

const PostEntry = ({ id, title, userName, commentCount, exited, setExited, menuShown, setMenuShown, userId, postUserId }) => {
    const router = useRouter();

    const [dotMenuShown, setDotMenuShown] = useState(false);

    console.log("USER ID")
    console.log(userId)

    return (
        <View>
            <TouchableOpacity onPress={() => router.push(`/forum/${id}`)}>
                <View style={styles.postCard}>
                    <View style={styles.textContainer}>
                        <Text>
                            <Text style={styles.boldUsername}>{userName + ":"} </Text>
                            <Text style={styles.postCardTitle}>{title}</Text>
                        </Text>
                        <Text style={styles.commentCount}>
                            {commentCount + " comments"}
                        </Text>
                    </View>
                    <TouchableOpacity style={styles.tripleDotButton} onPress={() => {
                        setDotMenuShown(!dotMenuShown)
                        setExited(false)
                        //setDotMenuShown(!dotMenuShown) 

                    }}>
                        <Image
                            source={icons.tripleDots}
                            style={styles.tripleDot}
                        />
                    </TouchableOpacity>
                    <TripleDotMenu
                        postId={id}
                        userId={userId}
                        dotMenuShown={dotMenuShown}
                        setDotMenuShown={setDotMenuShown}
                        exited={exited}
                        setExited={setExited}
                        menuShown={menuShown}
                        setMenuShown={setMenuShown}
                        postUserId={postUserId}
                    />
                </View>
            </TouchableOpacity>
        </View>
    )
}

const Posts = ({ exited, setExited }) => {
    const router = useRouter();
    const [posts, setPosts] = useState([]);
    const [loadingPosts, setLoadingPosts] = useState(true);
    const [menuShown, setMenuShown] = useState(false);

    const [userId, setUserId] = useState(-1);

    useEffect(() => {
        console.log("aaa")
        getSession().then(session => setUserId(JSON.parse(session).id));
        fetchPosts();
        //console.log(entries)
    }, [userId]);

    const fetchPosts = async () => {
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
                console.log("POSTYYY")
                console.log(posts)
                setLoadingPosts(false);
            });
        } catch (error) {
            console.log('Error fetching posts:', error);
        }
    };

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
        <View>
            {/* <View style={styles.fullInvisible}></View> */}
            <View style={styles.postsContainer}>
                <FlatList
                    data={posts}
                    renderItem={({ item }) => <PostEntry
                        title={item.title}
                        userName={item.userName}
                        commentCount={item.commentCount}
                        id={item.id}
                        exited={exited}
                        setExited={setExited}
                        menuShown={menuShown}
                        setMenuShown={setMenuShown}
                        userId={userId}
                        postUserId={item.userId}
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
        </View>
    )
}

export default Posts