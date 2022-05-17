import { useFonts, Montserrat_600SemiBold } from '@expo-google-fonts/montserrat';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import SvgCamera from '../../assets/Icons/Camera';
import styled from 'styled-components/native';
import React from 'react';

const Background = ({ children }) => {
  return (
    <LinearGradient colors={['#5E1515', '#BA2424']} style={{ flex: 1 }}>
      {children}
    </LinearGradient>
  )
}

 // ta de boa até (Considerar colocar margem para a svg) Foi arrumado, mas tem que testar

const Board = styled.View`
  justify-content: center;
  align-items: center;
  display: flex;
  height: 100%;
  width: 100%;
`;

const WhiteBoard = styled.View`
  background-color: #ffffff;
  border-radius: 20px;
  height: 95%;
  width: 90%;
`;

const ContainerInput = styled.View`
  padding-top: 5%;
  display: flex;
  width: 100%;
  flex: 7;
`;

const Input = styled.TextInput`
  background-color: #DDDDDD;
  border: 1px solid black;
  border-radius: 10px;
  padding-left: 15px;
  margin: 12px 25px;
  flex: 1;
`;

const InputText = styled.TextInput`
  background-color: #DDDDDD;
  border: 1px solid black;
  border-radius: 10px;
  padding-left: 15px;
  margin: 12px 25px;
  flex: 5;
`;

const ContainerButton = styled.View`
  flex-direction: row;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
`;

const Text = styled.Text`
  font-family: 'Montserrat_600SemiBold';
  align-content: center;
  font-size: 20px;
  color: #000000;
  margin-right: 10px;
  `;

const ButtonSubmit = styled.TouchableOpacity`
  background-color: #2B2A2A;
  flex: 1;
  border-radius: 10px;
  margin: 25px 25px;
`;

const WhiteText = styled.Text`
  font-family: 'Montserrat_600SemiBold';
  color: #FFFFFF;
  font-size: 26px
  margin: auto;
`;

const Error = styled.Text`
  color: #000000;
`;

export default function Options() {
  const navigation = useNavigation();

  let [fontsLoaded] = useFonts({
    Montserrat_600SemiBold,
  });

  if (!fontsLoaded) {
    return <Error>Reload the app</Error>;
  }

  return (
    <Background>
      <Board>
      <WhiteBoard>

        <ContainerInput>
          <Input placeholder='Digite o Endereço'></Input>
          <Input placeholder='Lista'></Input>
          <InputText placeholder='Informe o problema'></InputText>
        </ContainerInput>

        <ContainerButton>
          <Text>Anexar uma foto:</Text>
          <SvgCamera/>
        </ContainerButton>

        <ButtonSubmit onPress={ () => navigation.navigate('Principal')}>
          <WhiteText>Enviar</WhiteText>
        </ButtonSubmit>

      </WhiteBoard>
      </Board>
    </Background>
  )
}