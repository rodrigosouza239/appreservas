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
    marginTop:-100,
    marginBottom:-4       
  },
  Text:{
    color:colors.white,
    fontSize:30,
    fontFamily:fonts.regular,
  },
  Button:{
    marginTop:20,
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

    position:'relative',
    marginTop:-30,

    marginBottom:120

  },
  formInput:{
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
  formBottom:{
    backgroundColor:colors.Purple,
    borderRadius:27,
    width:280,
    height:55,
   
    justifyContent:'center',
    alignItems:'center',
    marginTop:30
  },
  formText:{
    fontFamily:fonts.regular,
    color:colors.whitetext,
    fontSize:20,
  },
  containerFormLembrar:{
    justifyContent:'flex-end',
    flexDirection:'row',
    alignItems:'center',
    left:70
  },
  containerFormLembrarText:{
    fontFamily:fonts.regular,
    color:colors.whitetext,
    fontSize:16,
  },
  containerFormLembrarSwitch:{
    marginHorizontal:10
  }
});

export default styles;