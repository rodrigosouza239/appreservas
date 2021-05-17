
import React,{useState} from 'react';
import { StyleSheet, Text,Modal, View,Platform,Button } from 'react-native';
import { ActionSheetProvider,connectActionSheet } from '@expo/react-native-action-sheet';


export class DateForm extends React.Component{

  constructor(props: {} | Readonly<{}>) {
    super(props)
    this.state ={
      show: false
    }
  }

  show = () =>{
    this.setState({show:true})
  }

  close = () => {
    this.setState({show:false})
  }


render(){
  return (
    <Modal 
      animationType={'fade'}
      transparent={true}
      onRequestClose={this.close}
    >
           
    </Modal>
  )
}



}


