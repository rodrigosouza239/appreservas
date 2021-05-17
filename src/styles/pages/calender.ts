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
  logo:{
    marginTop:360,
    width:281,
    height:225,
  },
  Text:{
    color:colors.white,
    fontSize:40,
    fontFamily:fonts.regular,
  },
  Button:{
    marginTop:30,
  },
  formDate:{
    justifyContent:'center',
    alignItems:'center',
    marginTop:90
  },
  formDateText:{
    color:colors.whitetext,
    fontSize:40,
    fontFamily:fonts.regular,
    marginBottom:40
  },
  formDateButtomText:{
    color:colors.whitetext,
    fontSize:23,
    fontFamily:fonts.regular,
  },
  input:{
    backgroundColor:colors.Purple,
    borderRadius:27,
    width:280,
    height:55,
    fontFamily:fonts.regular,
    fontSize:17,
    marginBottom:20,
    opacity:0.8,
    textAlign:'center'
  },
  inputTitle:{
    color:colors.whitetext,
    fontSize:40,
    fontFamily:fonts.regular,
    marginBottom:20
  },
  formInput:{
    backgroundColor:colors.white,
    borderRadius:27,
    width:90,
    height:55,
    fontFamily:fonts.regular,
    fontSize:20,
    marginBottom:20,
    opacity:0.8,
  
    textAlign:'center'
},
formInputDate:{
  backgroundColor:colors.white,
  borderRadius:27,
  width:220,
  height:55,
  fontFamily:fonts.regular,
  fontSize:20,
  marginBottom:20,
  opacity:0.8,

  textAlign:'center'
},
  inputForm:{
    justifyContent:'center',
    alignItems:'center',
    marginTop:-120,
    marginBottom:30
  },
  formInputselect:{
    backgroundColor:colors.white,
    borderRadius:27,
    width:90,
    height:50,
    fontFamily:fonts.regular,
    fontSize:60,
    paddingHorizontal:20,
    paddingStart:20,
    marginBottom:20,
    opacity:0.2,
    color:colors.black,
    textAlign:'center',
  },
});

export default styles;