import { useFonts, Montserrat_600SemiBold } from '@expo-google-fonts/montserrat';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import SvgLogo from '../../assets/LogoIcon/Logo';
import styled from 'styled-components/native';
import { ScrollView } from 'react-native';
import React from 'react';

const Background = ({ children }) => {
  return (
    <LinearGradient colors={['#5E1515', '#BA2424']} style={{ flex: 1 }}>
      {children}
    </LinearGradient>
  )
}
// Precisa de alterações
const Logo = styled.View`
  align-items: center;
  margin-top: 150px;
  margin-bottom: 170px;
`;

const ContentP = styled.View`
  width: 100%;
  align-items: center;
  padding-bottom: 220px;
`;

const PrincipalText = styled.Text`
  font-family: 'Montserrat_600SemiBold';
  font-size: 26px;
  color: #FFFFFF;
  text-align: center;
`;

const ContentButton = styled.View`
  margin-bottom: 20px;
  margin-left: 45px;
  margin-right: 45px;
  flex-direction: row;
  display: flex;
  background-color: #1F1E1E;
  border-radius: 20px;
  height: 65px;
`;

const ButtonRegister = styled.TouchableOpacity`
  background-color: #ffffff;
  border-radius: 20px;
  flex: 1;
`;

const RegisterText = styled.Text`
  font-family: 'Montserrat_600SemiBold';
  color: #000000;
  margin: auto;
`;

const ButtonSignIn = styled.TouchableOpacity`
  background-color: #1F1E1E;
  border-radius: 20px;
  flex: 1;
`;

const SignInText = styled.Text`
  font-family: 'Montserrat_600SemiBold';
  color: #FFFFFF;
  margin: auto;
`;

const Error = styled.Text`
  color: #000000;
`;

export default function Welcome() {
  const navigation = useNavigation();

  let [fontsLoaded] = useFonts({
    Montserrat_600SemiBold,
  });

  if (!fontsLoaded) {
    return <Error>Reload the app</Error>
  }

  return (
    <Background>
      <ScrollView showsVerticalScrollIndicator={false}>

        <Logo>
          <SvgLogo></SvgLogo>
        </Logo>

        <ContentP>
          <PrincipalText>{`Achou algo que te\nincomoda?\n`}</PrincipalText>
          <PrincipalText >{`Reporte para nós!`}</PrincipalText>
        </ContentP>

        <ContentButton>
          <ButtonRegister onPress={() => navigation.navigate('Register')} >
            <RegisterText>Registrar</RegisterText>
          </ButtonRegister>

          <ButtonSignIn onPress={() => navigation.navigate('SignIn')} >
            <SignInText>Entrar</SignInText>
          </ButtonSignIn>
        </ContentButton>
      </ScrollView>
    </Background>
  )
}