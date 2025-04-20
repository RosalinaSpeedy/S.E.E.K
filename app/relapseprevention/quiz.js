import { Text, View, SafeAreaView, ScrollView, ActivityIndicator, RefreshControl, TouchableOpacity } from "react-native";
import { Stack, useRouter, useLocalSearchParams } from 'expo-router';
import { useCallback, useState } from "react";

import { MainFooter, MainHeader, QuizHeading, AddictionTypeSelect, TriggerInputs, SeveritySelect, GenerateButton, BackButton } from '../../components';
import { COLORS, icons, SIZES } from '../../constants';
import styles from "../../styles/search";
import axios from "axios";

import { savePlan } from "../../services/junkoService";

//this needs to be changed based on the URL at the time - MAKE THIS STATIC SOMEHOW
const baseUrl = "http://trusting-multiply-rattler.ngrok-free.app";

const Quiz = () => {
    const params = useLocalSearchParams();
    const router = useRouter();
    const [addictionType, setAddictionType] = useState("");
    const [trigger1, setTrigger1] = useState("");
    const [trigger2, setTrigger2] = useState("");
    const [trigger3, setTrigger3] = useState("");
    const [severity, setSeverity] = useState(0);
    const [plan, setPlan] = useState("");

    const generatePlan = async (prompt) => {
        try {
            await axios.get(`${baseUrl}/submit-prompt?prompt=${prompt}`, {

            }).then(async (response) => {
                console.log("GOT plan output")
                console.log(response.data.content);                // AsyncStorage.setItem(KEY + "_TMPPOSTS", JSON.stringify(response.data));
                // console.log("posts saved " + JSON.stringify(response.data))
                //setPlan(response.data.content);
                await savePlan(response.data.content);
                console.log("plan saved")
                router.push("/relapseprevention/plan")
            });
        } catch (error) {
            console.log('Error fetching plan:', error);
        }
        //savePlan(null);
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <MainHeader />
            <ScrollView>
                <QuizHeading />
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
                    handlePress={async () => {
                        const prompt = `Addiction name: ${addictionType} Triggers: - ${trigger1} - ${trigger2} - ${trigger3} Addiction Severity: ${Math.round(severity * 10) / 10} Warning Signs - `;
                        console.log(prompt);
                        await generatePlan(prompt).then(console.log(plan));
                    }}
                />
            </ScrollView>
            <BackButton handlePress={() => router.back()} />
            <MainFooter />
        </SafeAreaView>
    )
}

export default Quiz;