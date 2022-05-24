import { useFonts, Montserrat_600SemiBold } from '@expo-google-fonts/montserrat';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import styled from 'styled-components/native';
import { ScrollView } from 'react-native';
import React from 'react';

const Gradient = ({ children }) => {
  return (
    <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#AF2222', '#530606']}>
      {children}
    </LinearGradient>
  )
}

const Background = styled.View`
  background-color: #FFFFFF
  height: 100%;
  width: 100%;
`;

const Header = styled.View`
  padding: 0px 0px 20px 20px;
  justify-content: flex-end;
  height: 140px;
  width: 100%;
`;

const Text = styled.Text`
  font-family: 'Montserrat_600SemiBold';
  font-size: 28px;
  color: #FFFFFF;
`;

const PrincipalContainer = styled.View`
  margin: 20px 0px 110px 0px;
  padding: 0px 10px;
  width: 100%;
`;

const Page = styled.View`
  background-color: #696969;
  justify-content: center;
  border-radius: 20px;
  padding-left: 15px;
  margin: 10px 0px;
  height: 55px;
  width: 100%;
`;

const PageText = styled.Text`
  font-family: 'Montserrat_600SemiBold';
  font-size: 16px;
  color: #FFFFFF;
`;

const Footer = styled.View`
  justify-content: center;
  padding-bottom: 15px;
  align-items: center;
  position: absolute;
  height: 90px;
  width: 100%;
  bottom: 0;
  left: 0;
`;

const Button = styled.TouchableOpacity`
  background-color: #292929;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  height: 100%;
  width: 80%;
`;

const ButtonText = styled.Text`
  font-family: 'Montserrat_600SemiBold';
  font-size: 28px;
  color: #FFFFFF;
`;

const Error = styled.Text`
  color: #000000;
`;

export function DrawerContent(props) {
  const navigation = useNavigation();

  let [fontsLoaded] = useFonts({
    Montserrat_600SemiBold,
  });
  
  if (!fontsLoaded) {
    return <Error>Reload the app</Error>;
  }

  return (
    <Background>
      <Gradient>
        <Header>
          <Text>Olá, Usuário</Text>
        </Header>
      </Gradient>

      <PrincipalContainer>
        <ScrollView>
          <Page>
            <PageText>Meus Reportes</PageText>
          </Page>

          <Page>
            <PageText>Perguntas Frequentes</PageText>
          </Page>

          <Page>
            <PageText>Configurações</PageText>
          </Page>
        </ScrollView>
      </PrincipalContainer>

      <Footer>
        <Button>
          <ButtonText onPress={() => navigation.navigate('Welcome')}>Sair</ButtonText>
        </Button>
      </Footer>
    </Background>
  )
}