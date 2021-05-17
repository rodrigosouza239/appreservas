import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Text,
  ImageBackground,
  TouchableOpacity,
  View,
  TextInput,
  Switch,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../../contexts/useAuth";
import Backgroud from "../../assets/backgroud2.png";
import Footer from "../../assets/image/footer.png";
import styles from "../../styles/pages/login";
import colors from "../../styles/styles/colors";

export default function Login() {
  const [isEnabled, setIsEnabled] = useState(false);
  const { signIn } = useAuth();
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const { navigate } = useNavigation();
  const navigation = useNavigation();
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");

  const hadleNavigateToCalenderPage = async (data: any) => {
    // signIn(data);
    navigate("Calender");
  };

  function hadleNavigateToPageRegister() {
    navigate("Register");
  }

  return (
    <>
      <ImageBackground
        style={styles.container}
        resizeMode="stretch"
        source={Backgroud}
      >
        <View style={styles.form}>
          <Text style={styles.formTitle}>Login</Text>
          <TextInput
            value={email}
            onChangeText={SetEmail}
            style={styles.formInput}
            placeholder="Email"
            placeholderTextColor={colors.whitetext}
          />
          <TextInput
            value={password}
            onChangeText={SetPassword}
            style={styles.formInput}
            secureTextEntry={true}
            placeholder="Senha"
            placeholderTextColor={colors.whitetext}
          />

          <View style={styles.containerFormLembrar}>
            <Text style={styles.containerFormLembrarText}>Lembrar</Text>

            <Switch
              style={styles.containerFormLembrarSwitch}
              trackColor={{ false: colors.white, true: colors.Purple }}
              thumbColor={isEnabled ? colors.white : colors.white}
              ios_backgroundColor={colors.gray}
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
        </View>

        <TouchableOpacity
          onPress={hadleNavigateToPageRegister}
          style={styles.formBottom}
        >
          <Text style={styles.formText}>não tem cadastro?</Text>
        </TouchableOpacity>

        <StatusBar style="auto" />
      </ImageBackground>
      
      <ImageBackground
        style={styles.footer}
        resizeMode="stretch"
        source={Footer}
      >
        <TouchableOpacity
          style={styles.Button}
          onPress={hadleNavigateToCalenderPage}
        >
          <Text style={styles.Text}>Login</Text>
        </TouchableOpacity>
      </ImageBackground>
    </>
  );
}
