import React from 'react'
import { View, Text, ScrollView, Linking } from 'react-native'

import RoundedSquareButton from './RoundedSquareButton'

import styles from './mainnav.style'
import { icons } from '../../../constants'

import Quotes from '../quotes/Quotes'
import { router } from 'expo-router'

import { getSession, retrieveSession } from '../../../services/forumDatabaseService'

const MainMenu = () => {
    //https://smartrecovery.org.uk/
    const url = "https://smartrecovery.org.uk/";
    return (
        <View style={{flex: 1}}>
            <ScrollView>
                <View style={styles.mainMenuContainer}>
                    <RoundedSquareButton
                        iconUrl={icons.clock}
                        title={"clocks"}
                        handlePress={() => router.push('/clocks/list')}
                    />
                    <RoundedSquareButton
                        iconUrl={icons.ribbon}
                        title={"relapse prevention"}
                        handlePress={() => router.push('/relapseprevention/plan')}
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
                    <RoundedSquareButton
                        iconUrl={icons.book}
                        title={"journal"}
                        handlePress={() => router.push('/journal/journal')}
                    />
                    <RoundedSquareButton
                        iconUrl={icons.cloud}
                        title={"learn"}
                        handlePress={() => Linking.openURL(url)}
                    />
                    <RoundedSquareButton
                        iconUrl={icons.exclamation}
                        title={"panic!"}
                        handlePress={() => router.push('/panic/panic')}
                    />
                </View>
                <Quotes
                    quote={"This should not appear."}
                />
            </ScrollView>
        </View>
    )
}

export default MainMenu