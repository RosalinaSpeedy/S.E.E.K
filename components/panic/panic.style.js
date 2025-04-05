import { StyleSheet } from "react-native";

import { COLORS, SIZES } from "../../constants";

const styles = StyleSheet.create({
    panicStepContainer: {
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '50%',
        marginBottom: '50%'
    },
    panicStepTitle: {
        fontSize: SIZES.xLarge * 2,
        textAlign: 'center'
    },
    panicStepBody: {
        fontSize: SIZES.medium,
        marginBottom: '9%',
        textAlign: 'center'
    },
    nextStepButton: {
        backgroundColor: '#06D6A0',
        borderRadius: 40,
        padding: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    disabledButton: {
        backgroundColor: '#999999',
        borderRadius: 40,
        padding: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    nextStepText: {
        color: COLORS.lightWhite,
        fontWeight: 'bold',
        fontSize: SIZES.medium * 0.87,
        textAlign: 'center'
    }
});

export default styles;
