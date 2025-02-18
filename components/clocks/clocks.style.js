import { StyleSheet } from "react-native";

import { COLORS, SIZES } from "../../constants";

//https://medium.com/@0saurabhgour/react-native-percentage-based-progress-circle-no-external-library-e25b43e83888

//https://stackoverflow.com/questions/42197026/react-native-concentric-circles
const clockSize = 360;

const styles = StyleSheet.create({
  addictionName: {
    fontSize: SIZES.large,
    color: '#F0A202',
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: SIZES.large,
    marginBottom: '5%'
  },
  relapseButtonContainer: {
    width: '45%',
    alignSelf: 'center',
    backgroundColor: '#E11313',
    borderRadius: 15,
    padding: '3%',
    alignContent: 'center',
    justifyContent: 'center'
  },
  relapseButtonText: {
    color: COLORS.lightWhite,
    fontSize: SIZES.xLarge,
    alignSelf: 'center'
  },
  legendRecord: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
    marginBottom: '1%'
  },
  greenDot: {
    aspectRatio: 1,
    width: '8%',
    borderRadius: '50%',
    backgroundColor: '#06D6A0',
    marginRight: '5%'
  },
  orangeDot: {
    aspectRatio: 1,
    width: '8%',
    borderRadius: '50%',
    backgroundColor: '#F0A202',
    marginRight: '5%'
  },
  redDot: {
    aspectRatio: 1,
    width: '8%',
    borderRadius: '50%',
    backgroundColor: '#BF5031',
    marginRight: '5%'
  },
  legendText: {
    fontSize: SIZES.medium
  },
  legendContainer: {
    marginBottom: '5%'
  },
  clockContainer: {
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },
  personalBestClock: {
    width: clockSize,
    height: clockSize,
    borderRadius: clockSize / 2,
    //borderColor: '#BF5031',
    borderColor: '#808080',
    borderWidth: clockSize / 18,
    alignItems: 'center',
    justifyContent: 'center'
  },
  goalProgressClock: {
    alignSelf: 'center',
    top: clockSize * 0.075, // The amount remaining
    left: clockSize * 0.075,
    position: 'absolute',
    width: clockSize * 0.85, // 80% of the base size
    height: clockSize * 0.85,
    borderRadius: clockSize / 2,
    //borderColor: '#F0A202',
    borderColor: '#808080',
    borderWidth: clockSize / 18,
    alignItems: 'center',
    justifyContent: 'center'
  },
  currentStreakClock: {
    top: clockSize * 0.15,
    left: clockSize * 0.15,
    position: 'absolute',
    width: clockSize * 0.7,
    height: clockSize * 0.7, // 60% of the base size
    borderRadius: clockSize * 0.8 / 2,
    //borderColor: '#06D6A0',
    borderColor: '#808080',
    borderWidth: clockSize / 18,
    alignItems: 'center',
    justifyContent: 'center'
  },
  mainStreakTextContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  youAreText: {
    fontSize: SIZES.small
  },
  streakCounterNumber: {
    fontSize: clockSize / 5.4,
    fontWeight: 'bold',
    color: '#F0A202'
  },
  daysCleanText: {
    fontWeight: 'bold',
    fontSize: SIZES.medium
  },
  clockChangeButtonContainer: {
    flexDirection: 'row',
    backgroundColor: '#f00',
    width: '110%',
    alignItems: 'center',
    marginBottom: '4%'
  },
  clockChangeButton: {
    position: 'absolute',
    right: 40,
    width: 60,
    height: 60,
  },
  calendarChangeButton: {
    position: 'absolute',
    left: 0,
    width: 60,
    height: 60,
  },
  clockChangeImage: {
    width: 60,
    height: 60,
  },
  calendarContainer: {
    height: clockSize,
    paddingTop: clockSize / 20
  },
  personalBestProgressBar: {
    position: 'absolute',
    width: clockSize,
    height: clockSize,
    borderRadius: clockSize / 2,
    borderTopColor: '#BF5031',
    borderRightColor: '#BF5031',
    borderLeftColor: '#00000001', //https://github.com/facebook/react-native/issues/34722
    borderBottomColor: '#00000001',
    borderWidth: clockSize / 18,
    transform: [{ rotateZ: '-135deg' }]
  },
  personalBestOffset: {
    position: 'absolute',
    width: clockSize,
    height: clockSize,
    borderWidth: clockSize / 18,
    borderRadius: clockSize / 2,
    borderLeftColor: '#00000001',
    borderBottomColor: '#00000001',
    borderRightColor: '#808080',
    borderTopColor: '#808080',
    transform: [{ rotateZ: '-135deg' }]
  },
  secondPersonalBestProgressBar: {
    position: 'absolute',
    width: clockSize,
    height: clockSize,
    borderRadius: clockSize / 2,
    borderLeftColor: '#00000001',
    borderBottomColor: '#00000001', //https://github.com/facebook/react-native/issues/34722
    borderTopColor: '#BF5031',
    borderRightColor: '#BF5031',
    borderWidth: clockSize / 18,
    transform: [{ rotateZ: '45deg' }]
  },
  goalProgressProgressBar: {
    position: 'absolute',
    width: clockSize * 0.85,
    height: clockSize * 0.85,
    borderRadius: (clockSize * 0.85) / 2,
    borderTopColor: '#F0A202',
    borderRightColor: '#F0A202',
    borderLeftColor: '#00000001', //https://github.com/facebook/react-native/issues/34722
    borderBottomColor: '#00000001',
    borderWidth: clockSize / 18,
    transform: [{ rotateZ: '-135deg' }]
  },
  goalProgressOffset: {
    position: 'absolute',
    width: clockSize * 0.85,
    height: clockSize * 0.85,
    borderWidth: clockSize / 18,
    borderRadius: (clockSize * 0.85) / 2,
    borderLeftColor: '#00000001',
    borderBottomColor: '#00000001',
    borderRightColor: '#808080',
    borderTopColor: '#808080',
    transform: [{ rotateZ: '-135deg' }]
  },
  secondGoalProgressProgressBar: {
    position: 'absolute',
    width: clockSize * 0.85,
    height: clockSize * 0.85,
    borderRadius: (clockSize * 0.85) / 2,
    borderLeftColor: '#00000001',
    borderBottomColor: '#00000001', //https://github.com/facebook/react-native/issues/34722
    borderTopColor: '#F0A202',
    borderRightColor: '#F0A202',
    borderWidth: clockSize / 18,
    transform: [{ rotateZ: '45deg' }]
  },
  currentStreakProgressBar: {
    position: 'absolute',
    width: clockSize * 0.7,
    height: clockSize * 0.7,
    borderRadius: (clockSize * 0.7) / 2,
    borderTopColor: '#06D6A0',
    borderRightColor: '#06D6A0',
    borderLeftColor: '#00000001', //https://github.com/facebook/react-native/issues/34722
    borderBottomColor: '#00000001',
    borderWidth: clockSize / 18,
    transform: [{ rotateZ: '-135deg' }]
  },
  currentStreakOffset: {
    position: 'absolute',
    width: clockSize * 0.7,
    height: clockSize * 0.7,
    borderWidth: clockSize / 18,
    borderRadius: (clockSize * 0.7) / 2,
    borderLeftColor: '#00000001',
    borderBottomColor: '#00000001',
    borderRightColor: '#808080',
    borderTopColor: '#808080',
    transform: [{ rotateZ: '-135deg' }]
  },
  secondCurrentStreakProgressBar: {
    position: 'absolute',
    width: clockSize * 0.7,
    height: clockSize * 0.7,
    borderRadius: (clockSize * 0.7) / 2,
    borderLeftColor: '#00000001',
    borderBottomColor: '#00000001', //https://github.com/facebook/react-native/issues/34722
    borderTopColor: '#06D6A0',
    borderRightColor: '#06D6A0',
    borderWidth: clockSize / 18,
    transform: [{ rotateZ: '45deg' }]
  },
  streakCardContainer: {
    alignSelf: 'center',
    width: '95%',
    borderColor: 'black',
    borderWidth: 2,
    marginTop: 10,
    marginBottom: 0,
    borderRadius: 5,
    padding: 3,
  },
  streakCardTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%'
  },
  cardAddictionName: {
    color: '#F0A202',
    fontSize: SIZES.medium,
    fontWeight: 'bold'
  },
  badgeIcon: {
    width: 80,
    height: 80
  },
  streakInfoText: {
    fontSize: SIZES.small
  },
  newClockButton: {
    backgroundColor: '#06D6A0',
    borderRadius: 20,
    padding: 4,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: 10,
    top: 5
  },
  newClockButtonText: {
    fontWeight: 'bold',
    color: 'white',

  },
  createClockButton: {
    backgroundColor: '#06D6A0',
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%',
    padding: '2%',
    alignSelf: 'center',
    marginTop: '2%',
    marginBottom: '3%',
    marginBottom: 50,
    marginTop: 15
  },
  streakNumberInput: {
    borderWidth: 2,
    borderRadius: 5,
    textAlign: 'justify',
    alignContent: 'flex-start',
    margin: '1%',
    width: '30%'
  },
  clockNameInput: {
    borderWidth: 2,
    borderRadius: 5,
    textAlign: 'justify',
    alignContent: 'flex-start',
    margin: '1%',
    width: '80%'
  },
  addNewTitle: {
    fontSize: SIZES.large,
    color: '#F0A202',
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: SIZES.large,
    marginBottom: '2%'
  },
  addNewCalendarContainer: {
    height: clockSize,
  },
  deleteButton: {
    position: 'absolute',
    right: 5,
    bottom: 5,
    backgroundColor: '#E11313',
    width: 60,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 2,
    borderRadius: 40,
  },
  deleteText: {
    color: 'white',
    fontSize: SIZES.xSmall
  },
  editButton: {
    position: 'absolute',
    right: 5,
    top: 5,
    backgroundColor: '#06D6A0',
    width: 60,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 2,
    borderRadius: 40,
  }
});

export default styles;

