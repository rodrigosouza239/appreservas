import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  View,
  ImageStore,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import axios from "../service/api";
import Backgroud from "../assets/backgroud2.png";
import { Feather } from "@expo/vector-icons";
import Footer from "../assets/image/footer.png";
import * as ImagePicker from "expo-image-picker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "../styles/pages/upload";
import colors from "../styles/styles/colors";

export default function Upload() {
  const { navigate } = useNavigation();
  const navigation = useNavigation();
  const [profileImage, setImages] = useState<string[]>([]);
  const [imageType] = useState("image/png");

  async function hadleNavigateToCalenderPage() {
    try {
      const userId = await AsyncStorage.getItem("clientes_userIdInfo");
      const profileImageSplitted = profileImage[0].toString().split(`,`);
      const response = await axios.put(`user/image/${userId}`, {
        profileImage: profileImageSplitted[1],
        imageType,
      });
      console.log("profileImage:", response);
      navigate("Calender");
    } catch (error) {}
  }

  async function hadleNavigateToSelectImage() {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== "granted") {
      alert("Eita, precisamos de acesso a sua camera...");
      return;
    }
    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      quality: 1,
    });
    if (result.cancelled) {
      return;
    }
    const { uri } = result;
    console.log(result);
    setImages([...profileImage, uri.toString()]);
  }

  return (
    <>
      <ImageBackground
        style={styles.container}
        resizeMode="stretch"
        source={Backgroud}
      >
        <Text style={styles.formTitle}>Bem vindo Amelia!</Text>
        <View style={styles.form}>
          <View style={styles.formImage}>
            {profileImage.map((image) => {
              return (
                <Image
                  key={image}
                  source={{ uri: image }}
                  style={styles.formImage}
                />
              );
            })}
          </View>
          <View>
            <TouchableOpacity onPress={hadleNavigateToSelectImage}>
              <Feather name="camera" color={colors.white} size={30} />
            </TouchableOpacity>
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
          onPress={hadleNavigateToCalenderPage}
        >
          <Text style={styles.Text}>Reservar</Text>
        </TouchableOpacity>
      </ImageBackground>
    </>
  );
}
