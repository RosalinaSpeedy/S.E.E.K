import { useState } from 'react';
import { View, ScrollView, SafeAreaView, Text } from 'react-native';
import { Stack, useRouter } from 'expo-router';

import { COLORS, icons, images, SIZES } from "../constants";
import { MainMenu, MainFooter, MainHeader } from "../components";

const homeScreen = () => {
    const router = useRouter();
    const [searchTerm, setSearchTerm] = useState("");
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <MainHeader/>
            <ScrollView>
                <MainMenu/>
            </ScrollView>
            <MainFooter/>
        </SafeAreaView>
    )
}

export default homeScreen;