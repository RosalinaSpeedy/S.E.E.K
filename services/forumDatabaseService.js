import axios from "axios";
import Constants from "expo-constants"

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
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
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
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
          }).then(response => {
            console.log('user login successful:', response.data);
        });
    } catch (error) {
        console.log('Error logging in:', error);
    }
};