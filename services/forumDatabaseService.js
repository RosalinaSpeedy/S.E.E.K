import axios from "axios";
import Constants from "expo-constants"
import AsyncStorage from "@react-native-async-storage/async-storage";

import { router } from "expo-router";

import { Alert } from "react-native";

const KEY = "SESSION";

//const { manifest } = Constants;
//https://stackoverflow.com/questions/47417766/calling-locally-hosted-server-from-expo-app
export const baseUrl = `http://${Constants.expoConfig?.hostUri?.split(':').shift()?.concat(':8000/api')}`;

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

export async function logIn(email, password, check) {
    try {
        await axios.post(`${baseUrl}/login`, {
            email: email,
            password: password
        }, {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        }).then(response => {
            //saveSession(response);
            console.log(response.data)
            // JSON.parse(getSession()) == null ? saveSession(response.data) : console.log("checking session");
            if (!check) {
                saveSession(response.data)
                if (response.data !== null) {
                    console.log("Login data:");
                    console.log(response.data)
                    router.push('forum/posts');
                } else {
                    Alert.alert("Error logging in", "Issue with email/password!");
                }
            }
            console.log('user login successful:', response.data);
            return response.data;
        });
    } catch (error) {
        console.log('Error logging in:', error);
        return null;
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
            if (logIn(sessionGot.email, sessionGot.password, true) !== null) {
                router.push("/forum/posts");
            } else {
                console.log("saved session login failed")
                router.push("/login/login")
            }
        } else {
            router.push("/login/login")
        }
    } catch {
        console.log("Some error occurred")
        router.push("/login/login")
    }
}

export async function fetchPosts() {
    try {
        await axios.get(`${baseUrl}/getposts`, {
            
        }, {
            headers: {}
        }).then(response => {
            console.log("GOT POSTS RAW:")
            console.log(response.data);
            console.log(response.data[0].body)
            AsyncStorage.setItem(KEY + "_TMPPOSTS", JSON.stringify(response.data));
            console.log("posts saved " + JSON.stringify(response.data))
            return response.data;
        });
    } catch (error) {
        console.log('Error fetching posts:', error);
    }
};

export async function getPosts() {
    console.log("getting posts")
    let postsGot = (await AsyncStorage.getItem(KEY + "_TMPPOSTS")) ?? '[]';
    console.log("RAW posts:")
    console.log(postsGot)
    return postsGot;
}

export async function getTempPosts() {
    getPosts().then(postsGot => {
        console.log("POSTS GOT:")
        console.log(postsGot);
        if (typeof postsGot.length !== 'undefined' 
            && postsGot.length > 0 ) {
            console.log("found posts:")
            console.log(postsGot);
            console.log("success")
            return postsGot;
        } else {
            console.log("fail")
            //await getTempPosts();
        }
    });
}

export async function addPost(title, text) {
    try {
        console.log("posting with session:")
        const session = await getSession();
        const sessionParsed = JSON.parse(session);
        console.log("SESSION WHEN ADDING POST")
        console.log(sessionParsed)
        await axios.post(`${baseUrl}/addpost`, {
            title: title,
            text: text,
            userId: sessionParsed.id
        }, {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        }).then(response => {
            console.log('post added:', response.data);
        });
    } catch (error) {
        console.log('Error posting:', error);
    }
}