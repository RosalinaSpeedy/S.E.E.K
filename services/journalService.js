import AsyncStorage from "@react-native-async-storage/async-storage";

let KEY = 'JOURNAL_SERVICE'

export async function getAllEntries() {
    const entries = (await AsyncStorage.getItem(KEY)) ?? '[]';
    return JSON.parse(entries);
}

export async function saveEntriesToStorage(entries) {
    AsyncStorage.setItem(KEY, JSON.stringify(entries));
}

export async function getEntryById(id) {
    const entries = await getAllEntries();
    return entries.find(entry => entry.id === id);
}

export async function saveEntry(text) {
    const entries = await getAllEntries();
    const today = new Date();
    entries.push({id: today, date: today.toLocaleDateString('en-GB'), text: text, emotion: "smiley"});
    console.log(entries)
    saveEntriesToStorage(entries);
}

export async function editEntry(id, text) {
    const entries = await getAllEntries();
    const entryIndex = entries.findIndex(entry => entry.id === id);
    console.log(entryIndex)
    const idDate = new Date(id);
    entries.splice(entryIndex, 1, {
        id: idDate,
        date: idDate.toLocaleDateString('en-GB'),
        text: text,
        emotion: "smiley"
    })
    console.log(entries);
    saveEntriesToStorage(entries);
}

export async function deleteEntry(id) {
    console.log("id is: " + id)
    const entries = await getAllEntries();
    console.log(entries);
    const entryIndex = entries.findIndex(entry => entry.id === id);
    console.log(entryIndex)
    entries.splice(entryIndex, 1)
    saveEntriesToStorage(entries);
}



