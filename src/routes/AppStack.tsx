import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../pages/Home';
import Calender from '../pages/Calender';
import Mesas from '../pages/Mesas';
import Reservas from '../pages/Reservas';
import Pagamento from '../pages/Pagaments';
import Sucesso from '../pages/Sucesso';
import Contact from '../pages/Contact';
import Login from '../pages/Login';
import Register from '../pages/Register';

import Upload from '../Views/Upload';
import CepRegister from '../pages/Register/CepRegister';


const { Navigator, Screen } = createStackNavigator();

export default function Routes() {
  return (
      <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false}}>
             <Screen name="Home" component={Home} />
             <Screen name="Calender" component={Calender} />
             <Screen name="Mesas" component={Mesas} />
             <Screen name="Reservas" component={Reservas} />
             <Screen name="Pagamento" component={Pagamento} />
             <Screen name="Sucesso" component={Sucesso} />
             <Screen name="Contact" component={Contact} />
             <Screen name="Login" component={Login} />
             <Screen name="Register" component={Register} />
            <Screen name="Upload" component={Upload} />
             <Screen name="CepRegister" component={CepRegister} />

      </Navigator>
    </NavigationContainer>
  );
}