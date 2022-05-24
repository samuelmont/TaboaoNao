import { useFonts, Montserrat_600SemiBold } from '@expo-google-fonts/montserrat';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { KeyboardAvoidingView } from 'react-native';
import Slider from '@react-native-community/slider';
import SvgCamera from '../../assets/Icons/Camera';
import styled from 'styled-components/native';
import { useState } from 'react';
import React from 'react';

const Background = ({ children }) => {
  return (
    <LinearGradient colors={['#5E1515', '#BA2424']} style={{ flex: 1 }}>
      {children}
    </LinearGradient>
  )
}

// Ta de boa até (Considerar colocar margem para a svg) Foi arrumado, mas tem que testar
// Multiline onde for colocar texto https://reactnative.dev/docs/textinput#multiline

const Board = styled.View`
  justify-content: center;
  align-items: center;
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
`;

const Input = styled.TextInput`
  background-color: #DDDDDD;
  border: 1px solid black;
  border-radius: 10px;
  padding-left: 15px;
  margin: 12px 25px;
  height: 50px;
`;

const InputText = styled.TextInput`
  background-color: #DDDDDD;
  border: 1px solid black;
  border-radius: 10px;
  padding-left: 15px;
  margin: 12px 25px;
  height: 200px;
`;

const ContainerSlider = styled.View`
  justify-content: center;
  align-items: center;
  margin: 10px 0px;
`;

const TextSlider = styled.Text`
  font-family: 'Montserrat_600SemiBold';
  align-content: center;
  margin-right: 70px;
  font-size: 14px;
  color: #000000;
`;

const ContainerButton = styled.View`
  justify-content: center;
  padding-bottom: 10px;
  margin-bottom: 150px;
  flex-direction: row;
  align-items: center;
  padding-top: 10px;
`;

const Text = styled.Text`
  font-family: 'Montserrat_600SemiBold';
  align-content: center;
  margin-right: 10px;
  font-size: 20px;
  color: #000000;
`;

const ButtonSubmit = styled.TouchableOpacity`
  background-color: #2B2A2A;
  border-radius: 10px;
  margin: 25px 25px;
  height: 70px;
`;

const WhiteText = styled.Text`
  font-family: 'Montserrat_600SemiBold';
  font-size: 26px;
  color: #FFFFFF;
  margin: auto;
`;

const Error = styled.Text`
  color: #000000;
`;

export function Potholes() {
  const navigation = useNavigation();

  const [range, setRange] = useState(0);

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

          <KeyboardAvoidingView>
            <ContainerInput>
              <Input placeholder='Digite o Endereço'></Input>
              <InputText placeholder='Informe o problema' multiline={true}></InputText>
              <ContainerSlider>
                <TextSlider>Defina um grau de prioridade:</TextSlider>
                <Slider 
                style={{width:250, height:50}}
                onValueChange={(value)=>setRange(value)}
                minimumValue={0}
                maximumValue={1}
                />
              </ContainerSlider>
            </ContainerInput>

            <ContainerButton>
              <Text>Anexar uma foto:</Text>
              <SvgCamera />
            </ContainerButton>
          </KeyboardAvoidingView>

          <ButtonSubmit onPress={() => navigation.navigate('Principal')}>
            <WhiteText>Enviar</WhiteText>
          </ButtonSubmit>

        </WhiteBoard>
      </Board>
    </Background>
  )
}

export function Sinalizations() {
  const navigation = useNavigation();

  const [range, setRange] = useState(0);

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

          <KeyboardAvoidingView>
            <ContainerInput>
              <Input placeholder='Digite o Endereço'></Input>
              <InputText placeholder='Informe o problema' multiline={true}></InputText>
              <ContainerSlider>
                <TextSlider>Defina um grau de prioridade:</TextSlider>
                <Slider 
                style={{width:250, height:50}}
                onValueChange={(value)=>setRange(value)}
                minimumValue={0}
                maximumValue={1}
                />
              </ContainerSlider>
            </ContainerInput>

            <ContainerButton>
              <Text>Anexar uma foto:</Text>
              <SvgCamera />
            </ContainerButton>
          </KeyboardAvoidingView>

          <ButtonSubmit onPress={() => navigation.navigate('Principal')}>
            <WhiteText>Enviar</WhiteText>
          </ButtonSubmit>

        </WhiteBoard>
      </Board>
    </Background>
  )
}

export function Accessibilities() {
  const navigation = useNavigation();

  const [range, setRange] = useState(0);

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

          <KeyboardAvoidingView>
            <ContainerInput>
              <Input placeholder='Digite o Endereço'></Input>
              <InputText placeholder='Informe o problema' multiline={true}></InputText>
              <ContainerSlider>
                <TextSlider>Defina um grau de prioridade:</TextSlider>
                <Slider 
                style={{width:250, height:50}}
                onValueChange={(value)=>setRange(value)}
                minimumValue={0}
                maximumValue={1}
                />
              </ContainerSlider>
            </ContainerInput>

            <ContainerButton>
              <Text>Anexar uma foto:</Text>
              <SvgCamera />
            </ContainerButton>
          </KeyboardAvoidingView>

          <ButtonSubmit onPress={() => navigation.navigate('Principal')}>
            <WhiteText>Enviar</WhiteText>
          </ButtonSubmit>

        </WhiteBoard>
      </Board>
    </Background>
  )
}

export function Illumination() {
  const navigation = useNavigation();

  const [range, setRange] = useState(0);

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

          <KeyboardAvoidingView>
            <ContainerInput>
              <Input placeholder='Digite o Endereço'></Input>
              <InputText placeholder='Informe o problema' multiline={true}></InputText>
              <ContainerSlider>
                <TextSlider>Defina um grau de prioridade:</TextSlider>
                <Slider 
                style={{width:250, height:50}}
                onValueChange={(value)=>setRange(value)}
                minimumValue={0}
                maximumValue={1}
                />
              </ContainerSlider>
            </ContainerInput>

            <ContainerButton>
              <Text>Anexar uma foto:</Text>
              <SvgCamera />
            </ContainerButton>
          </KeyboardAvoidingView>

          <ButtonSubmit onPress={() => navigation.navigate('Principal')}>
            <WhiteText>Enviar</WhiteText>
          </ButtonSubmit>

        </WhiteBoard>
      </Board>
    </Background>
  )
}

export function Others() {
  const navigation = useNavigation();

  const [range, setRange] = useState(0);

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

          <KeyboardAvoidingView>
            <ContainerInput>
              <Input placeholder='Digite o Endereço'></Input>
              <InputText placeholder='Informe o problema' multiline={true}></InputText>
              <ContainerSlider>
                <TextSlider>Defina um grau de prioridade:</TextSlider>
                <Slider 
                style={{width:250, height:50}}
                onValueChange={(value)=>setRange(value)}
                minimumValue={0}
                maximumValue={1}
                />
              </ContainerSlider>
            </ContainerInput>

            <ContainerButton>
              <Text>Anexar uma foto:</Text>
              <SvgCamera />
            </ContainerButton>
          </KeyboardAvoidingView>

          <ButtonSubmit onPress={() => navigation.navigate('Principal')}>
            <WhiteText>Enviar</WhiteText>
          </ButtonSubmit>

        </WhiteBoard>
      </Board>
    </Background>
  )
}