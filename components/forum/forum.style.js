import { StyleSheet } from "react-native";

import { FONT, SIZES, COLORS } from "../../constants";
import { CommentButton } from "..";

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
        position: 'absolute',
        right: 0,
        top: 18,
        alignSelf: 'flex-end'
    },
    textContainer: {
        alignSelf: 'left',
        marginLeft: 10,
        left: 0,
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
        alignItems: 'flex-end',
    },
    commentContainer: {
        backgroundColor: '#ECE5E5',
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
    },
    addPostBox: {
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
    postButton: {
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
    postText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
        alignSelf: 'center'
    },
    postTitle: {
        fontSize: SIZES.xLarge,
        color: '#F0A202',
        padding: '5%',
    },
    titleInputBox: {
        borderWidth: 2,
        width: '96%',
        borderRadius: 5,
        alignSelf: 'center',
        marginBottom: 2
    },
    commentButton: {
        alignSelf: 'flex-end',
        marginRight: 16,
        backgroundColor: '#06D6A0',
        width: 100,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        borderRadius: 40,
        marginBottom: 10
    },
    commentButtonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15,
        alignSelf: 'center'
    },
    commentsFlatList: {
        paddingBottom: 50
    },
    tripleDotMenuContainer: {
        position: 'absolute',
        right: 30,
        top: 8,
        backgroundColor: 'white',
        width: 80,
        alignItems: 'center',
        zIndex: 6
    },
    tripleDotMenuOption: {
        width: '100%',
    },
    optionButton: {
        width: '100%',
    },
    fullInvisible: {
        position: 'static',
        width: '100%',
        height: '100%',
        left: 0,
        top: 0,
        backgroundColor: 'red'
    }
});

export default styles;
