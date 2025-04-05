import { useEffect, useState } from 'react';
import { View, ScrollView, SafeAreaView, Text } from 'react-native';
import { Stack, useRouter } from 'expo-router';

import { COLORS, icons, images, SIZES } from "../constants";
import { MainMenu, MainFooter, MainHeader, AdminMainMenu } from "../components";
import { getSession } from '../services/forumDatabaseService';

import axios from 'axios';
axios.defaults.headers.common['REACT_APP_SEEK_FORUM_API_KEY'] = process.env.REACT_APP_SEEK_FORUM_API_KEY;

const homeScreen = () => {
    const router = useRouter();
    const [searchTerm, setSearchTerm] = useState("");
    const [session, setSession] = useState({});
    useEffect(() => {
        getSession().then(sessiony => setSession(JSON.parse(sessiony)))
        
    }, []);
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <MainHeader/>
            <ScrollView>
                {session?.clearance === "admin" ? <AdminMainMenu/> : <MainMenu/>}
            </ScrollView>
            <MainFooter/>
        </SafeAreaView>
    )
}

export default homeScreen;