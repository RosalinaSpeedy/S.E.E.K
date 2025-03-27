import { Text, View, SafeAreaView, ScrollView, ActivityIndicator, RefreshControl, TouchableOpacity } from "react-native";
import { Stack, useRouter, useLocalSearchParams } from 'expo-router';
import { useCallback, useEffect, useState } from "react";

import { MainFooter, MainHeader, WelcomeBackTitle, RegisterBoxes, LoginButton, RegisterButton, BigSeekLogo, SeekTagline } from '../../components';
import { COLORS, icons, SIZES } from '../../constants';
//import { getAllEntries, setEntries } from "../../services/journalService";

import { registerUser } from "../../services/forumDatabaseService";

const Register = () => {
    const router = useRouter();

    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <MainHeader />
            <ScrollView>
                <WelcomeBackTitle 
                    type="Register for S.E.E.K"
                />
                <RegisterBoxes 
                    onEmailChangeFunction={setEmail}
                    onUsernameChangeFunction={setUsername}
                    onPasswordChangeFunction={setPassword}
                />
                <LoginButton
                    handlePress={() => {
                        console.log(email)
                        console.log(username)
                        console.log(password)
                        registerUser(email, username, password);
                        router.push('login/login')
                    }} 
                    type="Register"
                />
                <BigSeekLogo />
                <SeekTagline />
            </ScrollView>
            <MainFooter />
        </SafeAreaView>
    )
}

export default Register;