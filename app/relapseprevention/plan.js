import {Text, View, SafeAreaView, ScrollView, ActivityIndicator, RefreshControl, TouchableOpacity} from "react-native";
import {Stack, useRouter, useLocalSearchParams} from 'expo-router';
import { useCallback, useState } from "react";

import {MainFooter, MainHeader, PledgeTitle, PledgeContent, ConfirmButton, PlanTitle, PlanBody, RegenerateButton} from '../../components';
import {COLORS, icons, SIZES} from '../../constants';
import styles from "../../styles/search";

const tempPledge = {
    pledge1: "pledge one",
    pledge2: "pledge two",
    pledge3: "pledge three"
}

const tempPlan = {
    trigger1: "trigger",
    trigger2: "trigger",
    trigger3: "trigger",
    warningSign1: "warning sign",
    warningSign2: "warning sign",
    warningSign3: "warning sign",
    copingStrategy1: "coping strategy",
    copingStrategy2: "coping strategy",
    copingStrategy3: "coping strategy",
}

const Plan = () => {
    const params = useLocalSearchParams();
    const router = useRouter();

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <MainHeader/>
            <ScrollView>
                <View>
                    <PledgeTitle/>
                    <PledgeContent pledge={tempPledge}/>
                    <ConfirmButton/>
                </View>
                <View>
                    <PlanTitle/>
                    <PlanBody plan={tempPlan}/>
                </View>
                <RegenerateButton/>
            </ScrollView>
            <MainFooter/>
        </SafeAreaView>
    )
}

export default Plan;