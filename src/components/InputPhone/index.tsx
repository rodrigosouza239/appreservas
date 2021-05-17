import React from 'react';
import { Text,TextInput,StyleSheet, TextInputProps } from 'react-native'
import { maskphone } from '../../utils/masks';

interface InputProps extends TextInputProps{
     mask: "maskphone" | "maskDate" | "currency";
     inputMaskChange:any;
}

const Input: React.FC<InputProps> = ({mask, inputMaskChange, ...rest}) =>{
  function handleChange(text:string){
   const value = maskphone(text);
   inputMaskChange(value)
  }

  return (
    <> 
       <TextInput
       onChangeText={(text) => handleChange(text)
      }
      {...rest}
       />
    </>
  )
}

export default Input;