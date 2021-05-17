import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,ImageBackground,Image,TouchableOpacity } from 'react-native';

import { useNavigation} from '@react-navigation/native';

 import Backgroud from '../../assets/backgroud2.png';
 import BackgroudMesas from '../../assets/image/backgroudmesa.png';
 import Backgroudvalor from '../../assets/image/backgroudvalor.png';
 import Footer from '../../assets/image/footer.png';

 import style from '../../styles/pages/reservas';



export default function Reservas() {
  const { navigate } = useNavigation();
    const navigation = useNavigation();


    function hadleNavigateToCalenderPage(){
      navigate('Pagamento')
      }

  return (
    <>
    <ImageBackground style={style.container} resizeMode="stretch" source={Backgroud}>
      
    <ImageBackground  style={style.Formbody} source={BackgroudMesas}>
     
     <Text style={style.FormbodyTitle}  >Mesa</Text>
     <Text style={style.FormbodyLabel} >1</Text>
     <View style={style.Formform} >
       <Text style={style.FormformTitle} >
         6 pessoas
       </Text>
       <Text style={style.FormformTitle} >
        para dia
       </Text>
       <Text style={style.FormformTitle}  >
       10/12/2020
       </Text  >
     </View>

    </ImageBackground>

    <ImageBackground  style={style.FormHeader} source={Backgroudvalor}>
     
     <View style={style.FormHeaderBoby} >
       <Text style={style.FormformTitle}>
         R$200
       </Text>
     </View>

    </ImageBackground>
   
      <StatusBar style="auto" />
    </ImageBackground>


    <ImageBackground style={style.footer} resizeMode="stretch" source={Footer} >
    <TouchableOpacity style={style.Button} onPress={hadleNavigateToCalenderPage} >
      <Text style={style.Text} >pagar reserva</Text>
      </TouchableOpacity>
    </ImageBackground>
    </>
  );
}
