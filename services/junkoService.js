import AsyncStorage from "@react-native-async-storage/async-storage";

let KEY = 'JUNKO_SERVICE'

export async function getSavedPlan() {
    const plan = (await AsyncStorage.getItem(KEY)) ?? '';
    console.log("SAVED PLAN")
    console.log(plan)
    return JSON.parse(plan);
}

export async function savePlan(plan) {
    console.log("saving plan")
    console.log(plan)
    AsyncStorage.setItem(KEY, JSON.stringify(plan));
    console.log("plan has been saved")
}