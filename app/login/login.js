import { Text, View, SafeAreaView, ScrollView, ActivityIndicator, RefreshControl, TouchableOpacity } from "react-native";
import { Stack, useRouter, useLocalSearchParams, useFocusEffect } from 'expo-router';
import { useCallback, useEffect, useState } from "react";

import { MainFooter, MainHeader, WelcomeBackTitle, LoginBoxes, LoginButton, RegisterButton, BigSeekLogo, SeekTagline } from '../../components';
import { COLORS, icons, SIZES } from '../../constants';

import { logIn, getSession, saveSession } from "../../services/forumDatabaseService";

const Login = () => {
    const router = useRouter();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // useEffect(() => {
    //     //getSession().then(session => session ? router.push("/forum/posts") : console.log("no session found"));
    //     //getSession().then(session => session == null || session == undefined ? router.push("/forum/posts") : console.log("session not found"));
    //     // console.log(session);
    //     // if (session != undefined && session != null) {
    //     //     router.push("/forum/posts");
    //     // }
    // }, []);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <MainHeader />
            <ScrollView>
                <WelcomeBackTitle
                    type="Welcome Back!"
                />
                <LoginBoxes
                    onEmailChangeFunction={setEmail}
                    onPasswordChangeFunction={setPassword}
                />
                <LoginButton
                    handlePress={() => {
                        // let session = getSession();
                        // session = session._j
                        // console.log(session);
                        logIn(email, password, false);
                        router.push('forum/posts')
                    }}
                    type="Log in"
                />
                <RegisterButton
                    handlePress={() => {
                        router.push('login/register')
                    }}
                />
                <BigSeekLogo />
                <SeekTagline />
            </ScrollView>
            <MainFooter />
        </SafeAreaView>
    )
}

export default Login;