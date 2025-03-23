import React from 'react'
import { View, Text, ScrollView } from 'react-native'

import RoundedSquareButton from './RoundedSquareButton'

import styles from './mainnav.style'
import { icons } from '../../../constants'

import Quotes from '../quotes/Quotes'
import { router } from 'expo-router'

const MainMenu = () => {
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
                    />
                    <RoundedSquareButton
                        iconUrl={icons.book}
                        title={"journal"}
                        handlePress={() => router.push('/journal/journal')}
                    />
                    <RoundedSquareButton
                        iconUrl={icons.cloud}
                        title={"learn"}
                    />
                    <RoundedSquareButton
                        iconUrl={icons.exclamation}
                        title={"panic!"}
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