import { StyleSheet } from "react-native";

import { COLORS, SIZES } from "../../constants";

const styles = StyleSheet.create({
    pledgeTitle: {
        fontSize: SIZES.large,
        color: '#F0A202',
        alignSelf: 'center',
        padding: '3%'
    },
    tickBoxImage: {
        width: 50,
        height: 50,
        padding: 5,
        marginLeft: '1%',
        marginRight: '4%'
    },
    pledgeRecordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    pledgeText: {
        fontSize: SIZES.medium
    },
    confirmButton: {
        backgroundColor: '#06D6A0',
        width: '50%',
        alignSelf: 'center',
        marginTop: '6%',
        padding: '2%',
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },
    disabledButton: {
        backgroundColor: '#999999',
        width: '50%',
        alignSelf: 'center',
        marginTop: '6%',
        padding: '2%',
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },
    confirmText: {
        fontSize: SIZES.large,
        fontWeight: 'bold'
    },
    planTitle: {
        color: '#F0A202',
        fontSize: SIZES.xLarge,
        padding: '2%',
        marginTop: '3%'
    },
    planHeading: {
        fontWeight: 'bold'
    },
    planBodyContainer: {
        paddingTop: '0%',
        paddingLeft: '2%'
    },
    regenerateButton: {
        backgroundColor: '#06D6A0',
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center',
        width: '30%',
        padding: '2%',
        position: 'absolute',
        right: 10,
        bottom: -50
    },
    regenerateButtonText: {
        fontWeight: 'bold'
    }
});

export default styles;
