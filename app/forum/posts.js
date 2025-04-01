import { Text, View, SafeAreaView, ScrollView, ActivityIndicator, RefreshControl, TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import { Stack, useRouter, useLocalSearchParams } from 'expo-router';
import { useCallback, useEffect, useState } from "react";

import { MainFooter, MainHeader, ForumTitle, Posts, AddButton } from '../../components';
import { COLORS, icons, SIZES } from '../../constants';
import { getAllEntries, setEntries } from "../../services/journalService";

const ForumHome = () => {
    const router = useRouter();
    const [exited, setExited] = useState('false')

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <TouchableWithoutFeedback style={{
                height: '100%',
                width: '100%',
                zIndex: 99,
            }} onPress={() => { setExited(true) }}>
                <View>
                <MainHeader />
                <ScrollView>
                    <ForumTitle />
                    <Posts 
                        exited={exited}
                        setExited={setExited}
                    />

                </ScrollView>
                <MainFooter />
                <AddButton
                    handlePress={() => {
                        router.push(`/forum/addnew/blank`);
                    }}
                />
                </View>
            </TouchableWithoutFeedback>
        </SafeAreaView>
    )
}

export default ForumHome;