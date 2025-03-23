import { StyleSheet } from "react-native";

import { FONT, SIZES, COLORS } from "../../constants";

const styles = StyleSheet.create({
    forumTitle: {
        color: '#F0A202',
        fontSize: 33,
        padding: 10,
        fontWeight: 'bold'
    },
    postCard: {
        width: '95%',
        backgroundColor: '#ECE5E5',
        alignSelf: 'center',
        marginBottom: '2%',
        padding: '3%',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    boldUsername: {
        fontWeight: 'bold',
        fontSize: 20
    },
    postCardTitle: {
        fontSize: 20
    },
    postsContainer: {
        height: '100%',
    },
    tripleDot: {
        height: 40,
        width: 40,
        
    },
    tripleDotButton: {
        alignSelf: 'flex-end'
    },
    textContainer: {
        alignSelf: 'flex-start',
        marginRight: '45%'
    }
});

export default styles;
