import React, { useState, useEffect, useCallback } from 'react'
import { Text, TouchableOpacity, View, Image, FlatList, TouchableWithoutFeedback, Dimensions, Alert } from 'react-native'
import { useFocusEffect, useRouter } from 'expo-router'
import axios from "axios";

import styles from './forum.style'
import AddButton from '../journal/AddButton'
import { icons } from '../../constants'
import { fetchPosts, getTempPosts, baseUrl, getSession } from '../../services/forumDatabaseService'
import { TripleDotMenu } from '../../components'

const PostTitleCard = ({ id, title, userId, postUserId }) => {
    const [dotMenuShown, setDotMenuShown] = useState(false);
    const [exited, setExited] = useState(false);

    return (
        <View style={styles.inlinePostTitleCard}>
            <Text style={styles.bigPostTitle}>
                {title}
            </Text>
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
                postUserId={postUserId}
            />
        </View>
    )
}

export default PostTitleCard