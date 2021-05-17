
import React from 'react';
import Routes from './src/routes/AppStack';
import { useFonts } from 'expo-font'
import { BreeSerif_400Regular } from '@expo-google-fonts/bree-serif';


export default function App() {
  const [fontsLoaded] = useFonts({
    BreeSerif_400Regular,
  });

  if(!fontsLoaded) {
    return null
  }
  return (
    <Routes />
  );
}
