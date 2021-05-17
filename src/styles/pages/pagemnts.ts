import { StyleSheet} from 'react-native';
import colors from '../styles/colors';
import fonts from '../styles/fonts';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center'
  },

  Text:{
    color:colors.white,
    fontSize:25,
    textAlign:'center',
    fontFamily:fonts.regular,
  },
  FormNotification:{
    justifyContent:'space-between',
    flexDirection:'row',
    paddingHorizontal:30
  },
  Button:{
    marginTop:60,
  },
  Form:{
    justifyContent:'space-between',flexDirection:'row'
  },
  FormInput:{
    width:180,
    height:50,
    borderRadius:14,
    backgroundColor:colors.Purple,
    paddingHorizontal:30,
    marginBottom:20,
    opacity:0.8,
   marginHorizontal:5
  },
  footer:{
   height: 140,
   marginTop:-50,
   marginBottom:-4         
  }
});

export default styles;