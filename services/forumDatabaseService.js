import axios from "axios";
import Constants from "expo-constants"

//const { manifest } = Constants;
//https://stackoverflow.com/questions/47417766/calling-locally-hosted-server-from-expo-app
const baseUrl = `http://${Constants.expoConfig?.hostUri?.split(':').shift()?.concat(':8000/api')}`;

export async function registerUser(email, username, password) {
    try {
        console.log(baseUrl)
        const response = await fetch(
            baseUrl + '/test'
        );
        const json = await response.json();
        console.log(json)
        // return json;
        // await axios.get(baseUrl + '/test').then(response => {
        //     console.log('user registered:', response.data);
        // });
    } catch (error) {
        console.log('Error registering user:', error);
    }
};