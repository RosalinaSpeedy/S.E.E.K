import AsyncStorage from "@react-native-async-storage/async-storage";

let KEY = 'CLOCK_SERVICE'

export async function getAllClocks() {
    const clocks = (await AsyncStorage.getItem(KEY)) ?? '[]';
    return JSON.parse(clocks);
}

export async function saveClocksToStorage(clocks) {
    AsyncStorage.setItem(KEY, JSON.stringify(clocks));
}

export async function getClockById(id) {
    const clocks = await getAllClocks();
    return clocks.find(clock => clock.id === id);
}

export async function saveClock(startDate, relapses, addictionName) {
    const clocks = await getAllClocks();
    const today = new Date();
    const startDateObj = new Date(startDate);
    clocks.push({
        id: today,
        startDate: startDateObj,
        relapses: relapses,
        addictionName: addictionName,
        currentGoal: 7,
        personalBest: 1
    });
    console.log(clocks)
    saveClocksToStorage(clocks);
}

export async function editClock(id, startDate, addictionName, newGoal) {
    const clocks = await getAllClocks();
    const clockIndex = clock.findIndex(clock => clock.id === id);
    console.log(clockIndex)
    const idDate = new Date(id);
    clocks[clockIndex].id = idDate;
    const startDateObj = new Date(startDate);
    clocks[clockIndex].startDate = startDateObj;
    clocks[clockIndex].addictionName = addictionName;
    clocks[clockIndex].currentGoal = newGoal;
    console.log(clocks);
    saveClocksToStorage(clocks);
}

export async function deleteClocks(id) {
    console.log("id is: " + id)
    const clocks = await getAllClocks();
    console.log(clocks);
    const clockIndex = clocks.findIndex(clock => clock.id === id);
    console.log(clockIndex)
    clocks.splice(clockIndex, 1)
    saveClocksToStorage(clocks);
}

export async function relapse(id) {
    const clocks = await getAllClocks();
    const clockIndex = clock.findIndex(clock => clock.id === id);
    console.log(clockIndex)
    const today = new Date();
    clocks[clockIndex].relapses.push(today);
    console.log(clocks);
    saveClocksToStorage(clocks);
}

export async function setPersonalBest(id) {
    const clocks = await getAllClocks();
    const clockIndex = clocks.findIndex(clock => clock.id === id);
    console.log(clockIndex)
    let time = getTime(clocks[clockIndex].startDate)
    //console.log(time)
    clocks[clockIndex].personalBest = time._j.days;
    console.log(clocks);
    saveClocksToStorage(clocks);
    return clocks[clockIndex];
}

// https://community.openhab.org/t/solved-calculate-duration-from-number-seconds/37445/4
export async function getTime(startDate) {
    //console.log("TIME:")
    let today = new Date();
    let startDateObj = new Date(startDate);
    //console.log(today)
    let seconds = (today.getTime() - startDateObj.getTime()) / 1000;
    //console.log(seconds)
    let secs = Math.floor(seconds % 60)
    let mins = Math.floor((seconds / 60) % 60)
    let hours = Math.floor((seconds / (60 * 60)) % 24)
    let days = Math.floor(seconds / (60 * 60 * 24))
    let time = {
        seconds: secs,
        minutes: mins,
        hours: hours,
        days: days,
        rawSeconds: seconds
    }
    return time;
}