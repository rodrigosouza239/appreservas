import styled from 'styled-components/native';
import fonts from './fonts';
import colors from './colors';

export const ContainerImage = styled.ImageBackground`
  flex: 1;
`;

export const ContainerView = styled.View`
  flex: 1;
`;

export const Container = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const FlatList = styled.FlatList`
  flex: 1;
`;

export const ContainerViewTitle = styled.View`
  margin-left:-160px;
`;

export const Image = styled.Image`
 width:125px;
 height:125px;
 margin-bottom:20px;
`;

export const ContainerCenter = styled.View`
  justify-content: center;
  align-items: center;
`;

export const ContainerProfile = styled.View`
  margin-top:80px;
  align-items: center;
  height:400px;
`;

export const ContainerProfileHeader = styled.View`
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  color: ${colors.white};
  font-size: 38px;
  text-align: center;
  margin-bottom: 20px;
  font-family: ${fonts.semi_bold};
`;

export const Btn = styled.TouchableOpacity`
  background-color: ${colors.Purple};
  width: 226px;
  height: 37px;
  border-radius: 7px;

  justify-content: center;
  align-items: center;
`;

export const Btn1 = styled.TouchableOpacity`
  background-color: ${colors.orange};
  width: 261px;
  height: 37px;
  border-radius: 7px;

  justify-content: center;
  align-items: center;
`;

export const Btn2 = styled.TouchableOpacity`
  background-color: ${colors.orange};
  width: 165px;
  height: 46px;
  border-radius: 7px;

  justify-content: center;
  align-items: center;
`;

export const Btn3 = styled.TouchableOpacity`
  width: 250px;
  height: 37px;
  border-radius:25px;

  justify-content: center;
  align-items: center;
`;

export const BtnProfile = styled.TouchableOpacity`
  justify-content:flex-start;
  align-items:flex-start;
`;

export const Space = styled.View`
  height: 30px;
`;

export const Input = styled.TextInput`
  background-color: ${colors.white};
  width: 300px;
  height:37px;
  border-radius:8px;

  color: ${colors.black};
  font-family: ${fonts.regular};
  font-size: 14px;
  padding-left:20px;
`;

export const H1 = styled.Text`
  color: ${colors.white};
  font-size: 17px;
  text-align: center;
  font-family: ${fonts.bold};
`;

export const TextError = styled.Text`
   font-size: 12px;
   color:${colors.white};
  font-family: ${fonts.regular};
`;

export const Title2 = styled.Text`
  color: #8f09f8;
  font-size: 38px;
  text-align: center;
  margin-bottom: 20px;
`;

export const Label = styled.Text`
  color: ${colors.white};
  font-size: 20px;
  text-align: center;
  font-family: ${fonts.semi_bold};
`;

export const LabelStrong = styled.Text`
  color: ${colors.backString};
  font-size:14px;
  font-family: ${fonts.bold};
`;
export const LabelStrong1 = styled.Text`
  color: ${colors.backString};
  font-size:14px;
  font-family: ${fonts.regular};
`;

export const Label2 = styled.Text`
  color: #000000;
  font-size: 20px;
  text-align: center;
  max-width: 420px;
`;


export const Barra = styled.View`
  width:84%;
  margin-top: 20px;
  border-bottom-width:1px;
  border-bottom-color:${colors.gray};
`;