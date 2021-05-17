import { StyleSheet } from "react-native";
import colors from "../styles/colors";
import fonts from "../styles/fonts";

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  footer: {
    height: 140,
    justifyContent: "center",
    alignItems: "center",
    marginTop: -50,
    marginBottom: -4,
  },
  containerBody: {
    justifyContent: "center",
    flexDirection: "column",
    padding: 23,
    paddingTop: 50,
  },
  containerBody1: {
    justifyContent: "center",
    flexDirection: "column",
    padding: 20,
    paddingTop: 4,
  },
  containerBodyRow: {
    flexDirection: "row",
  },
  containerBodyRowLabel: {
    color:colors.whitetext,
    fontSize: 30,
    justifyContent: "center",
    textAlign: "center",
  },
  containerBodyRowCollumText: {
    textAlign: "center",
    color:colors.PurpleRegular,
    fontFamily:fonts.regular,
    fontSize: 12,
    maxWidth: 40,
  },
  containerBodyRowCollum1: {
    width: 67,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  containerBodyRowCollum2: {
    width: 110,
    height: 56,
    justifyContent: "center",
    alignItems: "center",
    left: 10,
  },
  containerBodyRowCollum4: {
    width: 67,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    left: 10,
  },
  containerBodyRowCollum5: {
    width: 80,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    left: 110,
    marginTop: -20,
  },
  containerBodyRowCollum3: {
    width: 110,
    height: 56,
    justifyContent: "center",
    alignItems: "center",
    left: 60,
  },

  containerBodyRowCollum6: {
    width: 67,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
  },
  containerBodyRowCollum7: {
    width: 80,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
    marginBottom: 30,
    marginTop: -20,
  },

  containerBodyRowCollum8: {
    width: 115,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  containerBodyFile: {
    justifyContent: "flex-start",
    alignItems: "center",
    marginLeft: 140,
  },
});

export default styles;
