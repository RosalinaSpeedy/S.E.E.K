import React, { useState, useEffect, useCallback } from 'react'
import { Text, TouchableOpacity, View, Image, FlatList, TouchableWithoutFeedback, Dimensions } from 'react-native'
import { useFocusEffect, useRouter } from 'expo-router'
import axios from "axios";

import styles from './forum.style'
import AddButton from '../journal/AddButton'
import { icons } from '../../constants'
import { fetchPosts, getTempPosts, baseUrl } from '../../services/forumDatabaseService'

const TripleDotMenu = ({ postId, userId, dotMenuShown, setDotMenuShown, exited, setExited, menuShown, setMenuShown }) => {
    if (dotMenuShown) {
        if (exited) {
            console.log("exiting")
            setDotMenuShown(false);
            setExited(false);
            setMenuShown(false);
            return null;
        }
        return (
            <View style={styles.tripleDotMenuContainer}>
                {postId == userId ? <View style={{ width: '100%' }}>
                    <TouchableOpacity style={styles.tripleDotMenuOption}><View style={styles.optionButton}><Text>Edit</Text></View></TouchableOpacity>
                    <TouchableOpacity style={styles.tripleDotMenuOption}><View style={styles.optionButton}><Text>Delete</Text></View></TouchableOpacity>
                </View> : <TouchableOpacity style={styles.tripleDotMenuOption}><View style={styles.optionButton}><Text>Delete</Text></View></TouchableOpacity>}
            </View>
        )

    } else {
        return null;
    }
}

const PostEntry = ({ id, title, userName, comments, exited, setExited, menuShown, setMenuShown }) => {
    const router = useRouter();

    const [dotMenuShown, setDotMenuShown] = useState(false);
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
                            {comments.length + " comments"}
                        </Text>
                    </View>
                    <TouchableOpacity style={styles.tripleDotButton} onPress={() => {
                        setDotMenuShown(!dotMenuShown)
                        //setExited(false)
                        //setDotMenuShown(!dotMenuShown) 

                    }}>
                        <Image
                            source={icons.tripleDots}
                            style={styles.tripleDot}
                        />
                    </TouchableOpacity>
                    <TripleDotMenu
                        postId={id}
                        userId={id}
                        dotMenuShown={dotMenuShown}
                        setDotMenuShown={setDotMenuShown}
                        exited={exited}
                        setExited={setExited}
                        menuShown={menuShown}
                        setMenuShown={setMenuShown}
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
        <View>
            {/* <View style={styles.fullInvisible}></View> */}
            <View style={styles.postsContainer}>
                <FlatList
                    data={posts}
                    renderItem={({ item }) => <PostEntry
                        title={item.title}
                        userName={item.userName}
                        comments={["big", "bada", "bing", "bada", "boom"]}
                        id={item.id}
                        exited={exited}
                        setExited={setExited}
                        menuShown={menuShown}
                        setMenuShown={setMenuShown}
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