import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";

import {
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  Platform,
  Button,
} from "react-native";
import axios from "../../service/api";
import { useNavigation } from "@react-navigation/native";
import Backgroud from "../../assets/backgroud1.png";
import Footer from "../../assets/image/footer.png";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "../../styles/pages/calender";
import { Feather } from "@expo/vector-icons";
import moment from "moment";
import InputForm from "../../components/Input";
import colors from "../../styles/styles/colors";

export default function Calender(this: any) {
  const { navigate } = useNavigation();
  const navigation = useNavigation();
  const [limit, setLimit] = useState("");
  const [date, setDate] = useState("");

  const [selectedDateLast, setSelectedDateLast] = useState("");

  function handleCustom(value: string) {
    setSelectedDateLast(value);
  }

  async function hadleNavigateToMesasPage() {
    try {
      // const response = await axios.get(
      //   `table/consult?limit=${limit}&skip=0&date=${newDate}`
      // );
      await AsyncStorage.setItem("clientes_limit", limit);
      // await AsyncStorage.setItem("clientes_newDate", newDate);
      navigate("Mesas");
    } catch (error) {}
  }

  return (
    <>
      <ImageBackground
        style={styles.container}
        resizeMode="stretch"
        source={Backgroud}
      >
        <View style={styles.inputForm}>
          <Text style={styles.inputTitle}>Somos...</Text>
          <TextInput
            style={styles.formInput}
            placeholder="1"
            maxLength={2}
            placeholderTextColor={colors.Purple}
          />
        </View>

        <View>
          <View style={styles.formDate}>
            <TouchableOpacity>
              <Text style={styles.formDateText}>para o dia...</Text>
            </TouchableOpacity>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <InputForm
                maxLength={10}
                keyboardType="number-pad"
                value={selectedDateLast}
                style={styles.formInputDate}
                placeholder="DD/MM/YYYY"
                placeholderTextColor={colors.Purple}
                mask="maskDate"
                inputMaskChange={(text: string) => handleCustom(text)}
              />
            </View>
          </View>
        </View>
        <StatusBar style="auto" />
      </ImageBackground>
      <ImageBackground
        style={styles.footer}
        resizeMode="stretch"
        source={Footer}
      >
        <TouchableOpacity
          style={styles.Button}
          onPress={hadleNavigateToMesasPage}
        >
          <Text style={styles.Text}>Consultar</Text>
        </TouchableOpacity>
      </ImageBackground>
    </>
  );
}
