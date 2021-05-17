import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text,ImageBackground,Image,TouchableOpacity } from 'react-native';

import { useNavigation} from '@react-navigation/native';

 import Backgroud from '../../assets/backgroud.png';
 import Footer from '../../assets/image/footer.png'


 import Logo from '../../assets/image/logo.png';
import styles from '../../styles/pages/home';

export default function Home() {
  const { navigate } = useNavigation();
    const navigation = useNavigation();


    function hadleNavigateToCalenderPage(){
      navigate('Login')
      }

  return (
    <>
    <ImageBackground style={styles.container} resizeMode="stretch" source={Backgroud}>

     
      <Image style={styles.logo} source={Logo} />


 
      <StatusBar style="auto" />
    </ImageBackground>
    <ImageBackground style={styles.footer} resizeMode="stretch" source={Footer} >
    <TouchableOpacity style={styles.Button} onPress={hadleNavigateToCalenderPage} >
      <Text style={styles.Text} >Reservar</Text>
      </TouchableOpacity>
    </ImageBackground>
    </>
  );
}
