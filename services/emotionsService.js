import AsyncStorage from "@react-native-async-storage/async-storage";

let KEY = 'EMOTIONS_SERVICE'

export async function getAllEmotions() {
    const emotions = (await AsyncStorage.getItem(KEY)) ?? '[]';
    //console.log(JSON.parse(entries))
    return JSON.parse(emotions);
}

export async function saveEmotions(emotions) {
    AsyncStorage.setItem(KEY, JSON.stringify(emotions));
}

export async function getMostRecentEmotion() {
    console.log("getting most recent emotion");
    const emotions = await getAllEmotions();
    console.log("IN FUNCTION: EMOTIONS")
    console.log(emotions);
    console.log("IN FUNCTION: MOST RECENT")
    console.log(emotions[emotions.length - 1]);
    console.log("IN FUNCTION: ID")
    console.log(emotions[emotions.length - 1]?.id)
    console.log("IN FUNCTION: RETURNING")
    return emotions[emotions.length - 1];
}

export async function saveEmotion(emotion) {
    const emotions = await getAllEmotions();
    const today = new Date();
    emotions.push({id: today, emotion: emotion});
    console.log(emotions)
    await saveEmotions(emotions);
    return;
}