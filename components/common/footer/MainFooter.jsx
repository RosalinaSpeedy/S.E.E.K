import React from 'react'
import { View, Text, Touchable, TouchableOpacity } from 'react-native'

import HomeButton from './HomeButton'
import styles from './footer.style'
import { useRouter } from 'expo-router'

import { icons } from '../../../constants'

const MainFooter = () => {
    const router = useRouter();
    return (
        <View style={styles.footerMain}>
        <HomeButton
            iconUrl={icons.home}
            handlePress={() => {
                router.push("/")
            }}
        />
        </View>
    )
}

export default MainFooter;