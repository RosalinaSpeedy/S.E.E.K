import { StyleSheet } from "react-native";

import { COLORS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
    quoteContainer: {
        backgroundColor: '#F0A202',
        width: '91%',
        height: '16%',
        alignSelf: 'center',
        padding: 7
    },
    dailyQuoteTitle: {
        color: '#000000',
        fontWeight: "bold",
        fontStyle: 'italic',
        fontSize: 16
    },
    quoteBody: {
        color: '#000000',
        fontSize: 17
    }
});

export default styles;
