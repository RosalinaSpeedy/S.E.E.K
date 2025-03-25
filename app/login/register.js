import { Text, View, SafeAreaView, ScrollView, ActivityIndicator, RefreshControl, TouchableOpacity } from "react-native";
import { Stack, useRouter, useLocalSearchParams } from 'expo-router';
import { useCallback, useEffect, useState } from "react";

import { MainFooter, MainHeader, WelcomeBackTitle, LoginBoxes, LoginButton, RegisterButton, BigSeekLogo, SeekTagline } from '../../components';
import { COLORS, icons, SIZES } from '../../constants';
//import { getAllEntries, setEntries } from "../../services/journalService";

const Register = () => {
    const router = useRouter();

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <MainHeader />
            <ScrollView>
                <WelcomeBackTitle 
                    type="Register for S.E.E.K"
                />
                <LoginBoxes />
                <LoginButton
                    handlePress={() => {
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