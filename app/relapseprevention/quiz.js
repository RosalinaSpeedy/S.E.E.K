import {Text, View, SafeAreaView, ScrollView, ActivityIndicator, RefreshControl, TouchableOpacity} from "react-native";
import {Stack, useRouter, useLocalSearchParams} from 'expo-router';
import { useCallback, useState } from "react";

import {MainFooter, MainHeader, QuizHeading, AddictionTypeSelect, TriggerInputs, SeveritySelect, GenerateButton, BackButton} from '../../components';
import {COLORS, icons, SIZES} from '../../constants';
import styles from "../../styles/search";

const Quiz = () => {
    const params = useLocalSearchParams();
    const router = useRouter();
    const [addictionType, setAddictionType] = useState("");
    const [trigger1, setTrigger1] = useState("");
    const [trigger2, setTrigger2] = useState("");
    const [trigger3, setTrigger3] = useState("");
    const [severity, setSeverity] = useState(0);


    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <MainHeader/>
            <ScrollView>
                <QuizHeading/>
                <AddictionTypeSelect
                    setAddictionType={setAddictionType}
                />
                <TriggerInputs
                    setTrigger1={setTrigger1}
                    setTrigger2={setTrigger2}
                    setTrigger3={setTrigger3}
                />
                <SeveritySelect
                    setSeverity={setSeverity}
                />
                <GenerateButton
                    handlePress={() => {
                        const prompt = `Addiction name: ${addictionType}\nTriggers:\n- ${trigger1}\n- ${trigger2}\n- ${trigger3}\nAddiction Severity:\n${Math.round(severity * 10) / 10}\n`;
                        console.log(prompt);
                    }}
                />
            </ScrollView>
            <BackButton handlePress={() => router.back()}/>
            <MainFooter/>
        </SafeAreaView>
    )
}

export default Quiz;