import { StyleSheet } from "react-native";
import colors from "../styles/colors";
import fonts from "../styles/fonts";

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  containerForm: {
    width: 230,
    height: 330,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 200,
    marginBottom: 30,
  },
  containerFormHeader: {
    justifyContent: "center",
    alignItems: "center",
  },
  containerFormHeaderTitle: {
    color: colors.white,
    fontSize: 20,
    textAlign: "center",
    marginBottom: 10,
  },
  containerIcon: {
    width: 60,
    height: 40,
  },
});

export default styles;
