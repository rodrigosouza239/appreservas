import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";

import {
  StyleSheet,
  Text,
  Image,
  View,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import axios from "../../service/api";
import Backimage from "../../assets/backimage.png";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Footer from "../../assets/image/footer.png";

import style from "../../styles/pages/mesas";
import icon1 from "../../assets/iconmesas/icon1.png";
import icon2 from "../../assets/iconmesas/icon2.png";
import icon3 from "../../assets/iconmesas/icon3.png";
import icon4 from "../../assets/iconmesas/icon4.png";
import icon5 from "../../assets/iconmesas/icon5.png";
import icon6 from "../../assets/iconmesas/icon6.png";
import icon7 from "../../assets/iconmesas/icon7.png";
import icon8 from "../../assets/iconmesas/icon8.png";

interface Item {
  id: number;
  name: string;
  location: string;
  description: string;
  places: string;
}

export default function Mesa() {
  const { navigate } = useNavigation();
  const navigation = useNavigation();
  const [listenMesas, setListenMesas] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);

  async function loadMesas() {
    const limit = await AsyncStorage.getItem("clientes_limit");
    const newDate = await AsyncStorage.getItem("clientes_newDate");
    const response = await axios.get(
      `table/consult?limit=${limit}&skip=0&date=${newDate}`
    );
    setListenMesas(response.data);
    console.log(response);
  }

  useEffect(() => {
    loadMesas();
  }, []);

  function hadleNavigateToReservasPage() {
    navigate("Reservas");
  }

  return (
    <>
      <ImageBackground
        style={style.container}
        source={Backimage}
        resizeMode="cover"
      >
        <View style={style.containerBody}>
          <FlatList
            style={{ marginTop: 82 }}
            keyExtractor={(id) => String(id)}
            showsVerticalScrollIndicator={false}
            data={listenMesas}
            renderItem={({ item: mesas }) => (
              <View style={style.containerBodyRow}>
                <ImageBackground
                  style={style.containerBodyRowCollum1}
                  source={icon4}
                >
                  <Text style={style.containerBodyRowCollumText}>
                    {mesas.name}-{mesas.location}
                  </Text>
                </ImageBackground>
                <ImageBackground
                  style={style.containerBodyRowCollum4}
                  source={icon5}
                >
                  <Text style={style.containerBodyRowCollumText}>
                    Mesa 17 O4L
                  </Text>
                </ImageBackground>
                <ImageBackground
                  style={style.containerBodyRowCollum5}
                  source={icon6}
                >
                  <Text style={style.containerBodyRowCollumText}>
                    Mesa 12 O8L
                  </Text>
                </ImageBackground>
              </View>
            )}
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
          <Text style={style.Text}>Escolher Mesa</Text>
        </TouchableOpacity>
      </ImageBackground>
    </>
  );
}
