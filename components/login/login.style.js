import { StyleSheet } from "react-native";

import { COLORS, SIZES } from "../../constants";
import BigSeekLogo from "./BigSeekLogo";

const styles = StyleSheet.create({
    welcomeBackTitle: {
        color: '#D95D39',
        fontWeight: 'bold',
        alignSelf: 'center',
        textShadowColor: '#000000',
        textShadowRadius: SIZES.small,
        fontSize: SIZES.xLarge * 2.6,
        textAlign: 'center',
        marginTop: '8%'
    },
    loginInputContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '5%',
    },
    loginInput: {
        backgroundColor: '#F0A202',
        borderRadius: 40,
        fontWeight: 'bold',
        padding: 10,
        width: '90%',
        borderWidth: 2,
        borderColor: '#000000',
        marginBottom: 9
    },
    loginButton: {
        backgroundColor: '#D95D39',
        width: '50%',
        alignSelf: 'center',
        marginTop: '3%',
        padding: '2%',
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9
    },
    loginText: {
        fontSize: SIZES.large,
        fontWeight: 'bold',
        color: 'white'
    },
    registerButton: {
        alignSelf: 'center',
        marginTop: 9,
        zIndex: 9
    },
    registerText: {
        color: '#D95D39',
        textDecorationLine: 'underline'
    },
    BigSeekLogo: {
        alignSelf: 'center',
        width: 230,
        height: 230,
        marginTop: -30,
        marginBottom: -15
    },
    seekTagline: {
        alignSelf: 'center',
        textShadowRadius: 3,
        textShadowColor: '#000000'
    }
});

export default styles;
