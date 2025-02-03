import { useState } from 'react';
import { View, ScrollView, SafeAreaView, Text } from 'react-native';
import { Stack, useRouter } from 'expo-router';

import { COLORS, icons, images, SIZES } from "../constants";
import { Nearbyjobs, Popularjobs, RoundedSquareButton, ScreenHeaderBtn, LogoutButton, Welcome, Quotes, HomeButton, SeekIcon, MainMenu } from "../components";
//import { Colors } from 'react-native/Libraries/NewAppScreen';

const homeScreen = () => {
    const router = useRouter();
    const [searchTerm, setSearchTerm] = useState("");
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: "#000000" }, 
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <SeekIcon iconUrl={icons.logo} dimension={"60%"} handlePress={() => {
                            router.push("/")
                        }}/>
                    ),
                    headerRight: () => (
                        <LogoutButton/>
                    ),
                    headerTitle: ""
                }}
            />
            <MainMenu/>
        </SafeAreaView>
    )
}

export default homeScreen;