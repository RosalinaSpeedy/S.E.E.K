import {Text, View, SafeAreaView, ScrollView, ActivityIndicator, RefreshControl, TouchableOpacity} from "react-native";
import {Stack, useRouter, useLocalSearchParams} from 'expo-router';
import { useCallback, useEffect, useState } from "react";

import {MainFooter, MainHeader, PledgeTitle, PledgeContent, ConfirmButton, PlanTitle, PlanBody, RegenerateButton} from '../../components';
import {COLORS, icons, SIZES} from '../../constants';
import styles from "../../styles/search";

import { getSavedPlan, savePlan } from "../../services/junkoService";

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
    const [plan, setPlan] = useState("");
    const [formattedPlan, setFormattedPlan] = useState({});
    
    useEffect(() => {
        getSavedPlan().then(plany => prettify(plany));
        //console.log(plan)
        //console.log(prettify());
    }, []);

    const prettify = (plany) => {
        //let planTrimmed = plan.trim();
        let splitPlan = plany.split("-");
        splitPlan = splitPlan.map((e) => {
            e = e.replace("Addiction name", "");
            e = e.replace("Triggers", "");
            e = e.replace("Addiction Severity", "");
            e = e.replace("Warning Signs", "");
            e = e.replace("Coping Strategies", "");
            e = e.replace(/[0-9]./g, '');
            e = e.replace(":", "");
            e = e.replace(" :", "");
            e = e.trim();
            return e;
        });
        splitPlan = splitPlan.filter((item) => item !== "");
        console.log("SPLIT PLAN")
        console.log(splitPlan);
        const planObj = {
            name: splitPlan[0],
            trigger1: splitPlan[1],
            trigger2: splitPlan[2],
            trigger3: splitPlan[3],
            warningSign1: splitPlan[4],
            warningSign2: splitPlan[5],
            warningSign3: splitPlan[6],
            copingStrategy1: splitPlan[7],
            copingStrategy2: splitPlan[8],
            copingStrategy3: splitPlan[9],
        }
        console.log(planObj)
        setPlan(planObj);
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <MainHeader/>
            <ScrollView>
                <View>
                    <PledgeTitle/>
                    <PledgeContent pledge={plan ? {
                        pledge1: plan.copingStrategy1,
                        pledge2: plan.copingStrategy2,
                        pledge3: plan.copingStrategy3
                    } : "No pledges available!"}/>
                    <ConfirmButton/>
                </View>
                <View>
                    <PlanTitle/>
                    <PlanBody plan={plan}/>
                </View>
                <RegenerateButton handlePress={() => router.push('/relapseprevention/quiz')}/>
            </ScrollView>
            <MainFooter/>
        </SafeAreaView>
    )
}

export default Plan;