import React from 'react'
import { View, Text, ScrollView } from 'react-native'

import RoundedSquareButton from './RoundedSquareButton'

import styles from './mainnav.style'
import { icons } from '../../../constants'

import Quotes from '../quotes/Quotes'
import { router } from 'expo-router'

import { getSession, retrieveSession } from '../../../services/forumDatabaseService'

const AdminMainMenu = () => {
    return (
        <View style={{flex: 1}}>
            <ScrollView>
                <View style={styles.mainMenuContainer}>
                    <RoundedSquareButton
                        iconUrl={icons.exclamation}
                        title={"Admin Panel"}
                        handlePress={() => router.push('/reports/list')}
                    />
                    <RoundedSquareButton
                        iconUrl={icons.speechbubble}
                        title={"forum"}
                        handlePress={
                            () => {
                                let sessionGot;
                                //console.log(getSession())
                                // getSession().then(session => sessionGot = session)
                                // console.log("SESSIONGOT")
                                // console.log(sessionGot)
                                // if (sessionGot) {
                                //     router.push("/forum/posts");
                                // } else {
                                //     router.push("/login/login")
                                // }
                                retrieveSession();
                            }
                        }
                    />
                </View>
            </ScrollView>
        </View>
    )
}

export default AdminMainMenu