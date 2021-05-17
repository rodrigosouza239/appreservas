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
    marginTop:300,
    width:175,
    height:140,
  },
  Text:{
    color:colors.white,
    fontSize:40,
    fontFamily:fonts.regular,
  },
  Button:{
    marginTop:50,
  }
});

export default styles;