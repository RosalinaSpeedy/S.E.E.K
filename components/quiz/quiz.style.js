import { StyleSheet } from "react-native";

import { COLORS, SIZES } from "../../constants";
import SeveritySelect from "./SeveritySelect";
import GenerateButton from "./GenerateButton";

const styles = StyleSheet.create({
    quizHeading: {
        fontSize: SIZES.xLarge,
        color: '#F0A202',
        alignSelf: 'center',
        padding: '3%',
        marginBottom: '1.5%'
    },
    typeSelectContainer: {
        width: '50%',
        padding: '3%',
        marginBottom: '1.5%'
    },
    triggerInputsContainer: {
        padding: '3%',
        marginBottom: '1.5%'
    },
    triggerInput: {
        borderWidth: 2,
        borderRadius: 5,
        textAlign: 'justify',
        alignContent: 'flex-start',
        margin: '1%'
    },
    severitySelectContainer: {
        padding: '3%',
        marginBottom: '1.5%'
    },
    generateButton: {
        backgroundColor: '#06D6A0',
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center',
        width: '50%',
        padding: '4%',
        alignSelf: 'center',
        marginTop: '22.5%'
    },
    generateButtonText: {
        fontSize: SIZES.large,
        fontWeight: 'bold'
    },
    backText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: SIZES.small,
        alignSelf: 'center'
    },
    backButton: {
        backgroundColor: '#E11313',
        width: '15%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
        borderRadius: 40,
        margin: 10
    }
});

export default styles;
