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
    },
    inlinePostTitleCard: {
        flexDirection: 'row',
        width: '100%',
        padding: 15
    },
    bigPostTitle: {
        fontWeight: 'bold',
        fontSize: SIZES.xxLarge,
        marginRight: '35%'
    },
    userTitle: {
        fontWeight: 'bold',
        fontSize: SIZES.medium
    },
    postSectionContainer: {
        margin: 8,
        backgroundColor: '#ECE5E5',
        padding: 8,
        width: '94%',
        alignSelf: 'center'
    },
    readMoreText: {
        color: '#0008FF',
        textDecorationLine: 'underline'
    },
    commentSectionTitle: {
        fontWeight: 'bold',
        fontSize: SIZES.large,
        padding: 12
    },
    commentsContainer: {
        padding: 5,
        alignItems: 'flex-end'
    },
    commentContainer: {
        backgroundColor: '#ECE5E5',
        width: '90%',
        marginRight: 5,
        marginBottom: 3,
        padding: 4
    },
    commenterName: {
        fontWeight: 'bold'
    },
    commentBody: {
        fontWeight: 'normal'
    },
    commentBoxContainer: {
        padding: 15
    },
    commentBoxTitle: {
        fontSize: SIZES.small * 1.2,
        fontWeight: 'bold',
        marginBottom: '1%'
    },
    commentBox: {
        borderWidth: 2,
        height: 115,
        textAlign: 'justify',
        alignContent: 'flex-start',
        textAlignVertical: 'top',
    }
});

export default styles;
