import AsyncStorage from "@react-native-async-storage/async-storage";

let KEY = 'QUOTES_SERVICE'

const url = "https://zenquotes.io/api/today/";

//https://reactnative.dev/docs/network
//https://docs.zenquotes.io/zenquotes-documentation/
export async function fetchQuote() {
    console.log("FETCHING")
    try {
        const response = await fetch(
            url
        );
        const json = await response.json();
        //console.log(json)
        return json;
    } catch (error) {
        console.error(error);
    }
};

export async function getQuote() {
    let quoteGot;
    quoteGot = (await AsyncStorage.getItem(KEY + "_QUOTE")) ?? '[]';
    console.log("initial values:")
    console.log(quoteGot);
    let today = new Date();
    let date = new Date(await getDay());
    console.log(date)
    console.log(quoteGot[0])
    console.log(today === date)
    console.log(today.getHours() + " " + today.getMinutes() + " " + today.getSeconds() + " ")
    if (quoteGot.length === 2 || !quoteGot || (today.toISOString().split("T")[0] !== date.toISOString().split("T")[0] && (today.getHours() >= 5 && (today.getMinutes() > 0 || today.getSeconds() > 0)))) {
        console.log("failed to get quote: date -")
        console.log(date.length);
        console.log(date)
        if (date.length === 2 || !date || today.toISOString().split("T")[0] !== date.toISOString().split("T")[0]) {
            if (date.length === 0 || !date || (today.getHours() >= 5 && (today.getMinutes() > 0 || today.getSeconds() > 0))) {
                await saveDay(today);
                date = await getDay();
            }
        }
        quoteGot = await fetchQuote();
        console.log("got new quote:")
        console.log(quoteGot)
        await saveQuote(quoteGot);
    }
    return JSON.parse(quoteGot);
}

export async function saveQuote(quote) {
    AsyncStorage.setItem(KEY + "_QUOTE", JSON.stringify(quote));
}

export async function getDay() {
    const currentDay = (await AsyncStorage.getItem(KEY + "_DAY")) ?? '[]';
    console.log("DAY:")
    console.log(currentDay)
    return JSON.parse(currentDay);
}

export async function saveDay(day) {
    AsyncStorage.setItem(KEY + "_DAY", JSON.stringify(day));
}