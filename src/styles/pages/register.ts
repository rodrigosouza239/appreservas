import { StyleSheet} from 'react-native';
import colors from '../styles/colors';
import fonts from '../styles/fonts';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center'
  },
  footer:{
    height: 140,
    justifyContent:"center",
    alignItems:'center',
    marginTop:-120,
    marginBottom:-4       
  },
  Text:{
    color:colors.white,
    fontSize:30,
    fontFamily:fonts.regular,
  },
  Button:{
    marginTop:50,
  },
  form:{
       justifyContent:'center',
       alignItems:'center',
       flexDirection:'column'
  },
  formTitle:{
    fontFamily:fonts.regular,
    color:colors.whitetext,
    fontSize:50,
    marginTop:80,
    position:'relative',
    marginBottom:80

  },
  formInput:{
      backgroundColor:colors.Purple,
      borderRadius:27,
      width:333,
      height:55,
      fontFamily:fonts.regular,
      fontSize:17,
      marginBottom:20,
      opacity:0.8,
      textAlign:'center'
  },
  formInputselect:{
    backgroundColor:colors.Purple,
    borderRadius:27,
    width:333,
    height:55,
    fontFamily:fonts.regular,
    fontSize:17,
    paddingHorizontal:20,
    paddingStart:20,
    marginBottom:20,
    opacity:0.8,
    color:colors.whitetext,
    textAlign:'center'
  },
  formInput1:{
    backgroundColor:colors.Purple,
    borderRadius:27,
    width:160,
    height:55,
    marginHorizontal:5,
    fontFamily:fonts.regular,
    fontSize:17,
    marginBottom:20,
    opacity:0.8,
    textAlign:'center'
},
formInput2:{
  justifyContent:'space-between',
  alignItems:'center',
  flexDirection:'row',
  backgroundColor:colors.Purple,
  borderRadius:27,
  width:160,
  height:55,
  marginHorizontal:5,
  fontFamily:fonts.regular,
  fontSize:17,
  marginBottom:20,
  opacity:0.8,
  textAlign:'center',
  paddingHorizontal:10
},
  header:{
   height:50
  },
});

export default styles;