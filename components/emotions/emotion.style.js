import { StyleSheet } from "react-native";

import { COLORS, SIZES } from "../../constants";

const styles = StyleSheet.create({
    goodNightTitle: {
        color: COLORS.lightWhite,
        alignSelf: 'center',
        textAlign: 'center',
        fontSize: 39,
        marginTop: '30%'
    },
    emotionButtonsContainer: {
        flexDirection: 'row',
        marginTop: '19%',
        alignSelf: 'center'
    },
    emotionButton: {
        marginLeft: '2%',
        marginRight: '2%',
        aspectRatio: 1
        
    },
    emotionIcon: {
        height: 105,
        width: 105
    }
});

export default styles;
