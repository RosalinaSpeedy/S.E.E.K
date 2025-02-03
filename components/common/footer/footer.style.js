import { StyleSheet } from "react-native";

import { COLORS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  btnContainer: {
    width: 40,
    height: 40,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.small / 1.25,
    justifyContent: "center",
    alignItems: "center",
  },
  btnImg: (dimension) => ({
    width: dimension,
    height: dimension,
    borderRadius: SIZES.small / 1.25,
  }),
  footerMain: {
    width: "100%",
    alignItems: 'center',
    backgroundColor: "#000000",
    height: "5%",
  },
  homeButton: {
    borderRadius: 35,
    top: -30,
    backgroundColor: COLORS.lightWhite,
    borderBlockColor: '#000000',
    borderWidth: 3,
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  homeIcon: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  }
});

export default styles;
