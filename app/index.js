import { useEffect, useState } from 'react';
import { View, ScrollView, SafeAreaView, Text } from 'react-native';
import { Stack, useRouter } from 'expo-router';

import { COLORS, icons, images, SIZES } from "../constants";
import { MainMenu, MainFooter, MainHeader, AdminMainMenu } from "../components";
import { getSession } from '../services/forumDatabaseService';
import { getMostRecentEmotion, saveEmotions } from '../services/emotionsService';

import axios from 'axios';
axios.defaults.headers.common['REACT_APP_SEEK_FORUM_API_KEY'] = process.env.REACT_APP_SEEK_FORUM_API_KEY;

//saveEmotions([]);

const homeScreen = () => {
    const router = useRouter();
    const [searchTerm, setSearchTerm] = useState("");
    const [session, setSession] = useState({});
    const [settingEmotion, setSettingEmotion] = useState(false);
    const [emotion, setEmotion] = useState({});
    const today = new Date();

    const getEmotionsForSet = async () => {
        //if (settingEmotion) {
        console.log("Getting emotion!");
        const emotiony = await getMostRecentEmotion();
        console.log("EMOTION I GOT:");
        console.log(emotiony);
        if (emotiony) {
            if (emotiony.id?.toISOString().split("T")[0] == today.toISOString().split("T")[0]) {
                console.log("nothing wrong with this")
                setSettingEmotion(false);
            } else {
                console.log("no emotion found for today");
                router.push('/emotions/tracking');
                setSettingEmotion(false);
            }
        } else {
            console.log("no emotion found for today");
            router.push('/emotions/tracking');
            setSettingEmotion(false);
        }
        //}
    }

    useEffect(() => {
        getSession().then(sessiony => setSession(JSON.parse(sessiony)))

        //saveEmotions([])
    }, []);
    useEffect(() => {
        if ((today.getHours() >= 21 && (today.getMinutes() > 0 || today.getSeconds() > 0))) {
            //setSettingEmotion(true);
            getEmotionsForSet();
        }
    }, [settingEmotion])
    if (settingEmotion) {
        //getEmotionsForSet()
    }
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <MainHeader />
            <ScrollView>
                {session?.clearance === "admin" ? <AdminMainMenu /> : <MainMenu />}
            </ScrollView>
            <MainFooter />
        </SafeAreaView>
    )
}

export default homeScreen;