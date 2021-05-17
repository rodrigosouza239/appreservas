import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";

import {
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import Backgroud from "../../assets/backgroud2.png";
import Footer from "../../assets/image/footer.png";
import Bannerpagamento from "../../assets/image/pagaments.png";

import style from "../../styles/pages/pagemnts";
import colors from "../../styles/styles/colors";

export default function Pagamento() {
  const { navigate } = useNavigation();
  function hadleNavigateToReservasPage() {
    navigate("Sucesso");
  }

  return (
    <>
      <ImageBackground
        style={style.container}
        resizeMode="cover"
        source={Backgroud}
      >
        <StatusBar style="auto" />

        <View style={{ marginBottom: 30 }}>
          <Text style={{ fontSize: 30, color:colors.white, textAlign: "center" }}>
            Pagamento
          </Text>
          <Image
            style={{ width: 330, height: 140, borderRadius: 14 }}
            source={Bannerpagamento}
          />
        </View>

        <View style={style.Form}>
          <TextInput
            style={style.FormInput}
            placeholderTextColor={colors.white}
            placeholder="nome do cartão"
          />
          <TextInput
            style={style.FormInput}
            placeholderTextColor={colors.white}
            placeholder="vencimento"
          />
        </View>

        <View style={style.Form}>
          <TextInput
            style={style.FormInput}
            placeholderTextColor={colors.white}
            placeholder="numero do cartão"
          />
          <TextInput
            style={style.FormInput}
            placeholderTextColor={colors.white}
            placeholder="cvv"
          />
        </View>
      </ImageBackground>
      <ImageBackground
        style={style.footer}
        resizeMode="stretch"
        source={Footer}
      >
        <TouchableOpacity
          style={style.Button}
          onPress={hadleNavigateToReservasPage}
        >
          <Text style={style.Text}>confirmar</Text>
        </TouchableOpacity>
      </ImageBackground>
    </>
  );
}
