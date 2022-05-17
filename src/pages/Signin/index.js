import { useFonts, Montserrat_600SemiBold } from '@expo-google-fonts/montserrat';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import SvgLogo from '../../assets/LogoIcon/Logo';
import styled from 'styled-components/native';
import { ScrollView } from 'react-native';
import React from 'react';
// Teste Validação Front
import { CustomInput } from '../../Components/Input';
import { useState } from 'react';


const Background = ({ children }) => {
  return (
    <LinearGradient colors={['#5E1515', '#BA2424']} style={{ flex: 1 }}>
      {children}
    </LinearGradient>
  )
}

const Logo = styled.View`
  align-items: center;
  margin-top: 150px;
  margin-bottom: 100px;
`;

const ContainerGlobal = styled.View`
  display: flex;
  flex: 1;
`;

const CentralText = styled.Text`
  font-family: 'Montserrat_600SemiBold';
  font-size: 18px;
  color: #FFFFFF;
  text-align: center;
`;

const ContainerButton = styled.View`
  display: flex;
  height: 240px;
  width: 100%;
  margin-top: 75px
`;

const ButtonSignIn = styled.TouchableOpacity`
  background-color: #2B2A2A;
  border-radius: 10px;
  margin: 22% 25px;
  height: 65px;
`;

const WhiteButtonText = styled.Text`
  font-family: 'Montserrat_600SemiBold';
  color: #FFFFFF;
  margin: auto;
`;

const Error = styled.Text`
  color: #000000;
`;

// Tem que fazer alterações

export default function Welcome() {
  // States Teste
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  let [fontsLoaded] = useFonts({
    Montserrat_600SemiBold,
  });

  if (!fontsLoaded) {
    return <Error>Reload the app</Error>;
  }

  return (
    <Background>
      <ScrollView showsVerticalScrollIndicator={false}>

        <Logo>
          <SvgLogo></SvgLogo>
        </Logo>

        <ContainerGlobal>

            <CustomInput
              placeholder='Digite seu E-mail'
              value={email}
              setValue={setEmail}
            />
            <CustomInput
              placeholder='Digite sua Senha'
              value={password}
              setValue={setPassword}
              secureTextEntry={true}
            />

          <CentralText>Esqueceu a senha?</CentralText>

          <ContainerButton>
            <ButtonSignIn onPress={() => navigation.navigate('Principal')}>
              <WhiteButtonText>Entrar</WhiteButtonText>
            </ButtonSignIn>
          </ContainerButton>

        </ContainerGlobal>
      </ScrollView>
    </Background>
  )
}