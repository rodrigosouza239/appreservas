import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

import Backgroud from "../../assets/backgroud4.png";
import BackgroudMesas from "../../assets/image/backgroudmesa.png";
import Icon from "../../assets/image/Icons.png";
import Footer from "../../assets/image/footer.png";

import styles from "../../styles/pages/sucesso";

export default function Sucesso() {
  const { navigate } = useNavigation();
  const navigation = useNavigation();

  function hadleNavigateToContactPage() {
    navigate("Contact");
  }

  return (
    <>
      <ImageBackground
        style={styles.container}
        resizeMode="stretch"
        source={Backgroud}
      >
        <ImageBackground style={styles.containerForm} source={BackgroudMesas}>
          <View style={styles.containerFormHeader}>
            <Text style={styles.containerFormHeaderTitle}>Marina</Text>
            <Text style={styles.containerFormHeaderTitle}>
              Sua Reserva foi confirmada
            </Text>
            <Text style={styles.containerFormHeaderTitle}>Dia 11/12/2021</Text>
            <Text style={styles.containerFormHeaderTitle}>parti das 14hs</Text>
            <Text style={styles.containerFormHeaderTitle}>Até Breve</Text>

            <Image style={styles.containerIcon} source={Icon} />
          </View>
        </ImageBackground>

        <StatusBar style="auto" />
      </ImageBackground>

      <ImageBackground
        style={styles.footer}
        resizeMode="stretch"
        source={Footer}
      >
        <TouchableOpacity
          onPress={hadleNavigateToContactPage}
          style={styles.Button}
        >
          <Text style={styles.Text}>Enviar</Text>
        </TouchableOpacity>
      </ImageBackground>
    </>
  );
}
