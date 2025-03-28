import axios from "axios";
import Constants from "expo-constants"
import AsyncStorage from "@react-native-async-storage/async-storage";

import { router } from "expo-router";

import { Alert } from "react-native";

const KEY = "SESSION";

//const { manifest } = Constants;
//https://stackoverflow.com/questions/47417766/calling-locally-hosted-server-from-expo-app
const baseUrl = `http://${Constants.expoConfig?.hostUri?.split(':').shift()?.concat(':8000/api')}`;

//https://stackoverflow.com/questions/51143730/axios-posting-empty-request
export async function registerUser(email, username, password) {
    console.log(email)
    console.log(username)
    console.log(password)
    try {
        await axios.post(`${baseUrl}/registeruser`, {
            email: email,
            username: username,
            password: password
        }, {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        }).then(response => {
            console.log('user registered:', response.data);
        });
    } catch (error) {
        console.log('Error registering user:', error);
    }
};

export async function logIn(email, password) {
    try {
        await axios.post(`${baseUrl}/login`, {
            email: email,
            password: password
        }, {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        }).then(response => {
            //saveSession(response);
            console.log(response.data)
            saveSession(response.data);
            console.log('user login successful:', response.data);
            return "success"
        });
    } catch (error) {
        console.log('Error logging in:', error);
    }
};

export async function saveSession(user) {
    AsyncStorage.setItem(KEY + "_USER", JSON.stringify(user));
    console.log("Session saved " + JSON.stringify(user))
}

export async function getSession() {
    console.log("getting session")
    let sessionGot = (await AsyncStorage.getItem(KEY + "_USER")) ?? '[]';
    console.log("RAW SESSION:")
    console.log(sessionGot)
    return sessionGot;
}

export async function logout() {
    console.log("logging out")
    Alert.alert("Log out", 'You have been logged out!');
    saveSession(null);
    router.push("/")
}


//https://stackoverflow.com/questions/77896155/where-do-we-store-user-data-after-login-in-react-native
export async function retrieveSession() {
    try {
        let sessionGot = await getSession();
        if (sessionGot == "null") {
            router.push("/login/login");
            return;
        }
        sessionGot = JSON.parse(sessionGot);
        console.log("retrieved session:")
        console.log(sessionGot)
        console.log(typeof sessionGot.email !== 'undefined' 
            && typeof sessionGot.username !== 'undefined'  
            && typeof sessionGot.id !== 'undefined')
        if (typeof sessionGot.email !== 'undefined' 
            && typeof sessionGot.username !== 'undefined'  
            && typeof sessionGot.id !== 'undefined' ) {
            console.log("found session:")
            console.log(sessionGot);
            router.push("/forum/posts");

        } else {
            router.push("/login/login")
        }
    } catch {
        console.log("Some error occurred")
        router.push("/login/login")
    }
}