import { StyleSheet} from 'react-native';
import colors from '../styles/colors';
import fonts from '../styles/fonts';


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  form:{
    justifyContent:'center',
    alignItems:'center',
    marginTop:180,
  },
  formTitle:{
    color:colors.whitetext,
    fontSize:30,
    fontFamily:fonts.regular,
     textAlign:'center',
     marginTop:80
  },
  formImage:{
    backgroundColor:colors.Purple,
    width:200,
    height:200,
    borderRadius:8,
    marginBottom:10,
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
    fontSize:40,
    fontFamily:fonts.regular,
  },
  Button:{
    marginTop:50,
  }
});

export default styles;