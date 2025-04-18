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

export async function getMostRecentPledge() {
    console.log("getting most recent pledge");
    const pledge = (await AsyncStorage.getItem(KEY + "_PLEDGE")) ?? "";
    console.log(pledge);
    return JSON.parse(pledge);
}

export async function setMostRecentPledge() {
    const today = new Date()
    AsyncStorage.setItem(KEY + "_PLEDGE", JSON.stringify(today));
    console.log("pledge has been saved")
}