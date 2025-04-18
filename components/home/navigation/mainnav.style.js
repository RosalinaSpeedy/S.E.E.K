import { StyleSheet } from "react-native";

import { COLORS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
    mainMenuContainer: {
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',  
        justifyContent: 'center', 
        alignItems: 'center', 
        padding: 5
    },
    roundedButton: {
        aspectRatio: 1,
        borderRadius: 30,
        borderBlockColor: '#000000',
        borderWidth: 2,
        backgroundColor: '#bf5031',
        margin: 10,
        width: "44%",
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 1
    },
    roundedButtonIcon: {
        alignContent: 'center',
        justifyContent: 'center',
        width: '65%',
        height: '65%'
    },
    roundedButtonTitle: {
        color: COLORS.lightWhite,
        fontSize: SIZES.medium
    },
    roundedButtonTitleBold: {
        fontWeight: "bold",
        color: COLORS.lightWhite,
        fontSize: SIZES.medium
    },
    panicButton: {
        backgroundColor: "#E11313",
        aspectRatio: 1,
        borderRadius: 30,
        borderBlockColor: '#000000',
        borderWidth: 2,
        margin: 10,
        width: "44%",
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 1
    },
    alertIcon: {
        position: 'absolute',
        right: 100,
        top: -2,
        right: 140,
        width: 60,
        height: 60,
        zIndex: 15,
        
    }
});

export default styles;
