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
    borderColor: '#BF5031',
    borderWidth: clockSize / 18
  },
  goalProgressClock: {
    alignSelf: 'center',
    top: clockSize * 0.075, // The amount remaining
    left: clockSize * 0.075,
    position: 'absolute',
    width: clockSize * 0.85, // 80% of the base size
    height: clockSize * 0.85,
    borderRadius: clockSize / 2,
    borderColor: '#F0A202',
    borderWidth: clockSize / 18
  },
  currentStreakClock: {
    top: clockSize * 0.15,
    left: clockSize * 0.15,
    position: 'absolute',
    width: clockSize * 0.7,
    height: clockSize * 0.7, // 60% of the base size
    borderRadius: clockSize * 0.8 / 2,
    borderColor: '#06D6A0',
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
    right: 0,
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
  }
});

export default styles;
