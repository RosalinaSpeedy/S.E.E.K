import { useEffect, useState } from 'react';
import { View, ScrollView, SafeAreaView, Text } from 'react-native';
import { Stack, useRouter } from 'expo-router';

import { COLORS, icons, images, SIZES } from "../../constants";
import { MainHeader, MainFooter, GoodNightTitle, EmotionOptions } from "../../components";

const Tracking = () => {
    const router = useRouter();
    const [step, setStep] = useState(1);
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#017557' }}>
            <MainHeader/>
            <ScrollView>
                <GoodNightTitle/>
                <EmotionOptions/>
            </ScrollView>
            <MainFooter/>
        </SafeAreaView>
    )
}

export default Tracking;