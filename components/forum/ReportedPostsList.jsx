import React, { useState, useEffect, useCallback } from 'react'
import { Text, TouchableOpacity, View, Image, FlatList, TouchableWithoutFeedback, Dimensions, Alert } from 'react-native'
import { useFocusEffect, useRouter } from 'expo-router'
import axios from "axios";

import styles from './forum.style'
import AddButton from '../journal/AddButton'
import { icons } from '../../constants'
import { fetchPosts, getTempPosts, baseUrl, getSession } from '../../services/forumDatabaseService'
import { TripleDotMenu, ApprovalOptions } from '../../components'



const ReportedPostEntry = ({ title, userName, id, postUserId, loadingPosts, setLoadingPosts, fetchReportedPosts }) => {
    const router = useRouter();

    const [dotMenuShown, setDotMenuShown] = useState(false);

    const handlePost = async (decision) => {
        setLoadingPosts(true);
        try {
            await axios.post(`${baseUrl}/handlereport/${id}/${decision}`, {

            }, {
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            }).then(response => {
                //saveSession(response);
                console.log(response.data)
                // JSON.parse(getSession()) == null ? saveSession(response.data) : console.log("checking session");
                fetchReportedPosts();
                return response.data;
            });
        } catch (error) {
            console.log('Error logging in:', error);
            return null;
        }
    }

    return (
        <View>
            <TouchableOpacity onPress={() => router.push(`/forum/${id}`)}>
                <View style={styles.postCard}>
                    <View style={styles.textContainer}>
                        <Text>
                            <Text style={styles.boldUsername}>{userName + ":"} </Text>
                            <Text style={styles.postCardTitle}>{title}</Text>
                        </Text>
                    </View>
                    <ApprovalOptions
                        handleCrossPress={() => {
                            handlePost("delete").then(response => fetchReportedPosts());
                        }}
                        handleTickPress={() => {
                            handlePost("approve").then(response => fetchReportedPosts());
                        }}
                    />
                </View>
            </TouchableOpacity>
        </View>
    )
}
const ReportedPostsList = () => {

    const [posts, setPosts] = useState({});
    const [loadingPosts, setLoadingPosts] = useState(true);

    const fetchReportedPosts = async () => {
        //setLoadingPosts(true);
        try {
            await axios.get(`${baseUrl}/getreportedposts`, {

            }, {
                headers: {}
            }).then(response => {
                console.log("GOT REPORTED RAW:")
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
    }

    useEffect(() => {
        fetchReportedPosts();
        //console.log(entries)
    }, [loadingPosts]);

    if (loadingPosts) {
        return null;
    }

    return (
        <View>
            {/* <View style={styles.fullInvisible}></View> */}
            <View style={styles.postsContainer}>
                <FlatList
                    data={posts}
                    renderItem={({ item }) => <ReportedPostEntry
                        title={item.title}
                        userName={item.userName}
                        id={item.id}
                        postUserId={item.userId}
                        fetchReportedPosts={fetchReportedPosts}
                        loadingPosts={loadingPosts}
                        setLoadingPosts={setLoadingPosts}
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

export default ReportedPostsList

