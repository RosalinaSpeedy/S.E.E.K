import { useEffect, useState } from 'react';
import { View, ScrollView, SafeAreaView, Text } from 'react-native';
import { Stack, useRouter } from 'expo-router';

import { COLORS, icons, images, SIZES } from "../constants";
import { MainMenu, MainFooter, MainHeader, AdminMainMenu } from "../components";
import { getSession } from '../services/forumDatabaseService';
import { getMostRecentEmotion, saveEmotions } from '../services/emotionsService';

import { getMostRecentPledge } from '../services/junkoService';

import axios from 'axios';
axios.defaults.headers.common['REACT_APP_SEEK_FORUM_API_KEY'] = process.env.REACT_APP_SEEK_FORUM_API_KEY;

//saveEmotions([]);

const homeScreen = () => {
    const router = useRouter();
    const [searchTerm, setSearchTerm] = useState("");
    const [session, setSession] = useState({});
    const [settingEmotion, setSettingEmotion] = useState(false);
    const [emotion, setEmotion] = useState({});
    const [pledgeSet, setPledgeSet] = useState(false);
    const today = new Date();

    const getEmotionsForSet = async () => {
        //if (settingEmotion) {
        console.log("Getting emotion!");
        const emotiony = await getMostRecentEmotion();
        console.log("EMOTION I GOT:");
        console.log(emotiony);
        if (emotiony) {
            if (emotiony.id?.split("T")[0] == today.toISOString().split("T")[0]) {
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

    const getPledgeConfirmed = async () => {
        //if (settingEmotion) {
        console.log("Getting confirmation!");
        const pledgey = await getMostRecentPledge();
        console.log("content:");
        console.log(pledgey);
        if (pledgey) {
            if (pledgey.split("T")[0] == today.toISOString().split("T")[0]) {
                console.log("nothing wrong with this")
                setPledgeSet(true);
            } else {
                console.log("no pledge confirmation found for today");
                //router.push('/emotions/tracking');
                setPledgeSet(false);
            }
        } else {
            console.log("no pledge confirmation found for today");
            //router.push('/emotions/tracking');
            setPledgeSet(false);
        }
        //}
    }

    useEffect(() => {
        getSession().then(sessiony => setSession(JSON.parse(sessiony)))
        getPledgeConfirmed();
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
                {session?.clearance === "admin" ? <AdminMainMenu /> : <MainMenu pledgeSet={pledgeSet}/>}
            </ScrollView>
            <MainFooter />
        </SafeAreaView>
    )
}

export default homeScreen;

// import { useState } from 'react';
// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
// import { torch } from 'react-native-pytorch-core';

// export default function App() {
//   const [tensor, _setTensor] = useState(torch.rand([2, 3]));
//   return (
//     <View style={styles.container}>
//       <Text>{`Random tensor of shape ${tensor.shape} with data ${tensor.data()}`}</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

