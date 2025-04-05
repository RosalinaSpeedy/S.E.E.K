import { useEffect, useState } from 'react';
import { View, ScrollView, SafeAreaView, Text } from 'react-native';
import { Stack, useRouter } from 'expo-router';

import { COLORS, icons, images, SIZES } from "../../constants";
import { PanicMenu, MainHeader, MainFooter } from "../../components";

const Panic = () => {
    const router = useRouter();
    const [step, setStep] = useState(1);
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <MainHeader/>
            <ScrollView>
                <PanicMenu
                    step={step}
                    setStep={setStep}
                />
            </ScrollView>
            <MainFooter/>
        </SafeAreaView>
    )
}

export default Panic;