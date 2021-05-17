import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Text,
  ImageBackground,
  TouchableOpacity,
  View,
  TextInput,
  ScrollView,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import Backgroud from "../../assets/backgroud2.png";
import Footer from "../../assets/image/footer.png";
import InputForm from "../../components/InputPhone";
import styles from "../../styles/pages/register";
import colors from "../../styles/styles/colors";

export default function Register() {
  const { navigate } = useNavigation();
  const navigation = useNavigation();

  const [name, SetName] = useState("");
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");
  const [cpf, SetCpf] = useState("");
  const [phone, SetPhone] = useState("");
  const [gender, SetGender] = useState("");

  const [selectedDateLast, setSelectedDateLast] = useState("");

  function handleCustom(value: string) {
    setSelectedDateLast(value);
  }

  async function hadleNavigateToCalenderPage() {
    try {
      await AsyncStorage.setItem("clientes_nameInfo", name);
      await AsyncStorage.setItem("clientes_emailInfo", email);
      await AsyncStorage.setItem("clientes_passwordInfo", password);
      await AsyncStorage.setItem("clientes_cpfInfo", cpf);
      await AsyncStorage.setItem("clientes_phoneInfo", phone);
      await AsyncStorage.setItem("clientes_genderInfo", gender);
      navigate("CepRegister");
    } catch (error) {}
  }

  return (
    <>
      <ImageBackground
        style={styles.container}
        resizeMode="stretch"
        source={Backgroud}
      >
        <Text style={styles.formTitle}>Cadastro</Text>
        <ScrollView contentContainerStyle={{ paddingHorizontal: 24 }}>
          <View style={styles.form}>
            <TextInput
              value={name}
              onChangeText={SetName}
              style={styles.formInput}
              placeholder="Nome"
              placeholderTextColor={colors.whitetext}
            />
            <TextInput
              value={email}
              onChangeText={SetEmail}
              style={styles.formInput}
              placeholder="Email"
              placeholderTextColor={colors.whitetext}
            />
            <TextInput
              value={cpf}
              onChangeText={SetCpf}
              style={styles.formInput}
              placeholder="CPF"
              placeholderTextColor={colors.whitetext}
            />
            <InputForm
                maxLength={14}
                keyboardType="number-pad"
                value={selectedDateLast}
                style={styles.formInput}
                placeholder="Telefone"
                placeholderTextColor={colors.whitetext}
                mask="maskphone"
                inputMaskChange={(text: string) => handleCustom(text)}
              />
            <TextInput
              value={gender}
              onChangeText={SetGender}
              style={styles.formInput}
              placeholder="Gênero"
              placeholderTextColor={colors.whitetext}
            />
            <TextInput
              value={password}
              onChangeText={SetPassword}
              secureTextEntry={true}
              style={styles.formInput}
              placeholder="Senha"
              placeholderTextColor={colors.whitetext}
            />
          </View>
        </ScrollView>
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
          <Text style={styles.Text}>Avançar</Text>
        </TouchableOpacity>
      </ImageBackground>
    </>
  );
}
