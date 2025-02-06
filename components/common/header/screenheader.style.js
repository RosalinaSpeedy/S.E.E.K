import { StyleSheet } from "react-native";

import { COLORS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  buttonContainer: {
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  btnImg: (dimension) => ({
    width: dimension,
    height: dimension,
    borderRadius: SIZES.small / 1.25,
  }),
  iconImage: {
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  logoutButton: {
    color: COLORS.lightWhite
  }
});

export default styles;
