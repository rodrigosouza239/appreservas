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

import { useNavigation } from "@react-navigation/native";
import Backgroud from "../../../assets/backgroud2.png";
import Footer from "../../../assets/image/footer.png";
import styles from "../../../styles/pages/register";
import AsyncStorage from "@react-native-async-storage/async-storage";
import InputForm from "../../../components/Input";
import axios from "../../../service/api";
import colors from "../../../styles/styles/colors";

export default function CepRegister() {
  const { navigate } = useNavigation();
  const navigation = useNavigation();

  const [addressStreet, SetaddressStreet] = useState("");
  const [addressNumber, SetaddressNumber] = useState("");
  const [addressDistrict, SetaddressDistrict] = useState("");
  const [addressComplement, SetaddressComplement] = useState("");
  const [addressCity, SetaddressCity] = useState("");
  const [addressState, SetaddressState] = useState("");
  const [addressCountry, SetaddressCountry] = useState("");
  const [addressUf, SetaddressUf] = useState("");
  const [addressCep, SetaddressCep] = useState("");
  const [birthday, Setbirthday] = useState("");
  const [endereco, SetEndereco] = useState(null);

  const [selectedDateLast, setSelectedDateLast] = useState("");

  function handleCustom(value: string) {
    setSelectedDateLast(value);
  }

  async function hadleNavigateToCalenderPage() {
    try {
      // const name = await AsyncStorage.getItem("clientes_nameInfo");
      // const email = await AsyncStorage.getItem("clientes_emailInfo");
      // const password = await AsyncStorage.getItem("clientes_passwordInfo");
      // const cpf = await AsyncStorage.getItem("clientes_cpfInfo");
      // const phone = await AsyncStorage.getItem("clientes_phoneInfo");
      // const gender = await AsyncStorage.getItem("clientes_genderInfo");
      // const response = await axios.post("user", {
      //   name,
      //   email,
      //   password,
      //   cpf,
      //   phone,
      //   gender,
      //   addressStreet,
      //   addressNumber,
      //   addressDistrict,
      //   addressComplement,
      //   addressCity,
      //   addressState,
      //   addressCountry,
      //   addressUf,
      //   addressCep,
      //   birthday,
      // });
      // await AsyncStorage.setItem("clientes_userIdInfo", response.data.userId);
      // console.log(response);
      navigate("Upload");
    } catch (error) {}
  }

  const buscarCep = () => {
    fetch(`https://viacep.com.br/ws/${addressCep}/json/`)
      .then((response) => response.json())
      .then((obj) => SetEndereco(obj))
      .catch((erro) => alert(erro));
    console.log(endereco);
  };

  return (
    <>
      <ImageBackground
        style={styles.container}
        resizeMode="stretch"
        source={Backgroud}
      >
        <Text style={styles.formTitle}>Logradouro</Text>
        <ScrollView contentContainerStyle={{ paddingHorizontal: 24 }}>
          <View style={styles.form}>
            <View style={{ flexDirection: "row" }}>
              <View style={styles.formInput2}>
                <TextInput
                  value={addressCep}
                  onChangeText={SetaddressCep}
                  placeholder="CEP"
                  placeholderTextColor={colors.whitetext}
                />
                <TouchableOpacity onPress={buscarCep}>
                  <Text style={{ color: colors.whitetext }}>Buscar</Text>
                </TouchableOpacity>
              </View>
              <TextInput
                value={addressNumber}
                onChangeText={SetaddressNumber}
                style={styles.formInput1}
                placeholder="Número"
                placeholderTextColor={colors.whitetext}
              />
            </View>

            {endereco != null && (
              <View>
                <View style={{ flexDirection: "row" }}>
                  <TextInput
                    value={addressUf}
                    onChangeText={SetaddressUf}
                    style={styles.formInput1}
                    placeholder={endereco.uf}
                    placeholderTextColor={colors.whitetext}
                  />
                  <TextInput
                    value={addressCity}
                    onChangeText={SetaddressCity}
                    style={styles.formInput1}
                    placeholder={endereco.localidade}
                    placeholderTextColor={colors.whitetext}
                  />
                </View>

                <View style={{ flexDirection: "row" }}>
                  <TextInput
                    value={addressDistrict}
                    onChangeText={SetaddressDistrict}
                    style={styles.formInput1}
                    placeholder={endereco.bairro}
                    placeholderTextColor={colors.whitetext}
                  />

                  <TextInput
                    value={addressState}
                    onChangeText={SetaddressState}
                    style={styles.formInput1}
                    placeholder="Estado"
                    placeholderTextColor={colors.whitetext}
                  />
                </View>
                <TextInput
                  value={addressComplement}
                  onChangeText={SetaddressComplement}
                  style={styles.formInput}
                  placeholder={endereco.logradouro}
                  placeholderTextColor={colors.whitetext}
                />

                <TextInput
                  value={addressComplement}
                  onChangeText={SetaddressComplement}
                  style={styles.formInput}
                  placeholder="Pais"
                  placeholderTextColor={colors.whitetext}
                />
              </View>
            )}

            <TextInput
              value={addressComplement}
              onChangeText={SetaddressComplement}
              style={styles.formInput}
              placeholder="Complemento"
              placeholderTextColor={colors.whitetext}
            />

            <InputForm
              maxLength={10}
              keyboardType="number-pad"
              value={selectedDateLast}
              style={styles.formInput}
              placeholder="Aniversário"
              placeholderTextColor={colors.whitetext}
              mask="maskDate"
              inputMaskChange={(text: string) => handleCustom(text)}
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
          <Text style={styles.Text}>Cadastrar</Text>
        </TouchableOpacity>
      </ImageBackground>
    </>
  );
}
