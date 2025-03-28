import { Text, View, SafeAreaView, ScrollView, ActivityIndicator, RefreshControl, TouchableOpacity } from "react-native";
import { Stack, useRouter, useLocalSearchParams } from 'expo-router';
import { useCallback, useEffect, useState } from "react";

import { MainFooter, MainHeader, WelcomeBackTitle, LoginBoxes, LoginButton, RegisterButton, BigSeekLogo, SeekTagline } from '../../components';
import { COLORS, icons, SIZES } from '../../constants';

import { logIn } from "../../services/forumDatabaseService";

const Login = () => {
    const router = useRouter();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

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
                        logIn(email, password);
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