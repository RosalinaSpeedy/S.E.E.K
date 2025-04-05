//import {Text, View, SafeAreaView, ScrollView, ActivityIndicator, RefreshControl} from "react-native";
import {Stack, useRouter} from 'expo-router';
import { useCallback, useState } from "react";

import {SeekIcon, LogoutButton} from '../../../components';
import {icons} from '../../../constants';

const MainHeader = () => {
    const router = useRouter();
    return (
        <Stack.Screen
            options={{
                headerStyle: { backgroundColor: "#000000" }, 
                headerShadowVisible: false,
                headerLeft: () => (
                    <SeekIcon iconUrl={icons.logo} dimension={"60%"} handlePress={() => {
                        console.log("ICON!")
                        router.push("/emotions/tracking")
                    }}/>
                ),
                headerRight: () => (
                    <LogoutButton/>
                ),
                headerTitle: ""
            }}
        />
    )
}

export default MainHeader;