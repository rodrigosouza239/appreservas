import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";

import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Feather, FontAwesome } from "@expo/vector-icons";

import Backgroud from "../../assets/backgroud5.png";
import Footer from "../../assets/image/footer.png";

import styles from "../../styles/pages/contact";
import colors from "../../styles/styles/colors";

export default function Contact() {
  const { navigate } = useNavigation();
  const navigation = useNavigation();

  function hadleNavigateToPagamentoPage() {
    navigate("Home");
  }

  return (
    <>
      <ImageBackground
        style={styles.container}
        resizeMode="cover"
        source={Backgroud}
      >
        <StatusBar style="auto" />

        <View style={styles.containerBody}>
          {/* //rede social */}
          <View style={styles.containerBodyForm}>
            <View style={styles.containerBodyFormFace}>
              <Feather name="facebook" color={colors.orange} size={50} />
            </View>
            <Text style={styles.containerBodyFormFaceTitle}>@entrevilas</Text>
          </View>

          <View style={styles.containerBodyForm}>
            <View style={styles.containerBodyFormFace}>
              <Feather name="instagram" color={colors.orange} size={50} />
            </View>
            <Text style={styles.containerBodyFormFaceTitle}>@entrevilas</Text>
          </View>

          <View style={styles.containerBodyForm}>
            <View style={styles.containerBodyFormFace}>
              <FontAwesome name="whatsapp" color={colors.orange} size={50} />
            </View>
            <Text style={styles.containerBodyFormFaceTitle1}>
              +55 12 99745-9897
            </Text>
          </View>
        </View>
      </ImageBackground>
      <ImageBackground
        style={styles.footer}
        resizeMode="stretch"
        source={Footer}
      >
        <TouchableOpacity
          style={styles.Button}
          onPress={hadleNavigateToPagamentoPage}
        >
          <Text style={styles.Text}>Sair</Text>
        </TouchableOpacity>
      </ImageBackground>
    </>
  );
}
