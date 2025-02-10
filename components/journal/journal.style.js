import { StyleSheet } from "react-native";

import { FONT, SIZES, COLORS } from "../../constants";

const styles = StyleSheet.create({
    journalTitle: {
        fontSize: SIZES.xLarge,
        color: '#F0A202',
        padding: '5%'
    },
    addButton: {
        backgroundColor: '#06D6A0',
        aspectRatio: 1,
        width: 70,
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        right: 20,
        bottom: 50
    },
    plus: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 40,
        alignSelf: 'center'
    },
    entryCard: {
        alignSelf: 'center',
        backgroundColor: '#ECE5E5',
        width: '93%',
        padding: '2%',
        borderWidth: 2,
        marginBottom: 50
    },
    entryDate: {
        fontWeight: 'bold',
        fontSize: SIZES.large
    },
    entryBody: {
        fontSize: SIZES.small * 1.15
    },
    entryEmotionContainer: {
        position: 'absolute',
        right: -10,
        top: -50,
        borderWidth: 2,
        borderRadius: 50,
        height: 87,
        width: 87,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.lightWhite
    },
    entryEmotion: {
        alignSelf: 'center',
        height: '110%',
        width: '110%'
    },
    addEntryBox: {
        borderWidth: 2,
        width: '96%',
        height: 460,
        borderRadius: 5,
        alignSelf: 'center',
        textAlign: 'justify',
        alignContent: 'flex-start',
        textAlignVertical: 'top',
        marginBottom: '5%'
    },
    saveButton: {
        position: 'absolute',
        right: 20,
        bottom: -50,
        backgroundColor: '#06D6A0',
        width: 80,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        borderRadius: 40,
    },
    saveText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
        alignSelf: 'center'
    },
    cancelButton: {
        position: 'absolute',
        left: 20,
        bottom: -50,
        backgroundColor: '#E11313',
        width: 100,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        borderRadius: 40,
    }
});

export default styles;
