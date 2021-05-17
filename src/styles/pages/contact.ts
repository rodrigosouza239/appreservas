import { StyleSheet } from "react-native";
import colors from "../styles/colors";
import fonts from "../styles/fonts";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  Text: {
    color:colors.white,
    fontSize: 30,
    textAlign: "center",
    fontFamily:fonts.regular,
  },
  Button: {
    marginTop: 50,
  },
  containerBody: {
    top: 120,
  },
  containerBodyForm: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
  },
  containerBodyFormFace: {
    backgroundColor:colors.PurpleRegular,
    width: 81,
    height: 81,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  containerBodyFormFaceTitle: {
    color:colors.white,
    fontSize: 30,
    fontFamily:fonts.regular,
    left: 10,
  },
  containerBodyFormFaceTitle1: {
    color:colors.white,
    fontSize: 20,
    fontFamily:fonts.regular,
    left: 10,
  },
  footer: {
    height: 140,
    justifyContent: "center",
    alignItems: "center",
    marginTop: -50,
    marginBottom: -4,
  },
});

export default styles;
