import { StyleSheet } from "react-native";
import colors from "../styles/colors";
import fonts from "../styles/fonts";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  logo: {
    marginTop: 480,
    width: 281,
    height: 225,
  },
  Text: {
    color: colors.white,
    fontSize: 30,
    fontFamily: fonts.regular,
  },
  Button: {
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  Formbody: {
    width: 230,
    height: 330,
    marginTop: 200,
    marginBottom: 30,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  FormbodyTitle: {
    color: colors.white,
    fontSize: 30,
  },
  FormbodyLabel: {
    color: colors.green,
    fontSize: 60,
  },
  Formform: {
    justifyContent: "center",
    alignItems: "center",
  },
  FormformTitle: {
    color: colors.white,
    fontSize: 20,
  },
  FormHeader: {
    width: 130,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  FormHeaderBoby: {
    justifyContent: "center",
    alignItems: "center",
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
