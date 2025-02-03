import React from 'react'
import { View, Text, ScrollView } from 'react-native'

import RoundedSquareButton from './RoundedSquareButton'

import styles from './mainnav.style'
import { icons } from '../../../constants'

import Quotes from '../quotes/Quotes'
import { MainFooter, HomeButton } from '../../../components'

const MainMenu = () => {
    return (
        <View style={{flex: 1}}>
            <ScrollView>
                <View style={styles.mainMenuContainer}>
                    <RoundedSquareButton
                        iconUrl={icons.clock}
                        title={"clocks"}
                    />
                    <RoundedSquareButton
                        iconUrl={icons.ribbon}
                        title={"relapse prevention"}
                    />
                    <RoundedSquareButton
                        iconUrl={icons.speechbubble}
                        title={"forum"}
                    />
                    <RoundedSquareButton
                        iconUrl={icons.book}
                        title={"journal"}
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
                    quote={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet sagittis."}
                />
            </ScrollView>
            <MainFooter/>
        </View>
    )
}

export default MainMenu