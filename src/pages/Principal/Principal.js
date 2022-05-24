import { useFonts, Montserrat_600SemiBold } from '@expo-google-fonts/montserrat';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar, ScrollView } from 'react-native';
import SvgOptions from '../../assets/Icons/Options';
import SvgCircle from '../../assets/Icons/Circle';
import { DrawerContent } from './Drawer/Drawer';
import styled from 'styled-components/native';
import React from 'react';

const Drawer = createDrawerNavigator();

const Background = ({ children }) => {
  return (
    <LinearGradient colors={['#5E1515', '#BA2424']} style={{ flex: 1 }}>
      {children}
    </LinearGradient>
  )
}

const Head = styled.View`
  background-color: rgba(0, 0, 0, 0.4);
  flex-direction: row;
  display: flex;
  height: 120px;
  width: 100%;
`;

const UserContainer = styled.View`
  justify-content: flex-start;
  align-items: flex-end;
  flex-direction: row;
  margin-bottom: 10px;
  margin-left: 10px;
  flex: 4;
`;

const UserText = styled.Text`
  font-family: 'Montserrat_600SemiBold';
  margin-left: 10px;
  font-size: 26px;
  color: #FFF;
`;
  
const OptionsContainer = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  flex: 1;
`;

const ReportContainer = styled.TouchableOpacity`
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 20px;
  margin: 20px auto;
  height: 140px;
  width: 80%;
`;

const HeadReport = styled.View`
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  background-color: #FFFFFF; 
  justify-content: center;
  align-items: center;
  height: 40px;
`;

const Title = styled.Text`
  font-family: 'Montserrat_600SemiBold';
  align-content: center;
  font-size: 20px;
  color: #000000;
`;
  
const Text = styled.Text`
  font-family: 'Montserrat_600SemiBold';
  text-align: center;
  font-size: 15px;
  color: #000000;
  margin: auto 20px;
`;

const ButtonTest = styled.TouchableOpacity`
  background-color: #1F1E1E;
  border-radius: 20px;
  flex: 1;
`;

const Error = styled.Text`
  color: #000000;
`;


function HomeScreen() {
  const navigation = useNavigation();

  let [fontsLoaded] = useFonts({
    Montserrat_600SemiBold,
  });

  if (!fontsLoaded) {
    return <Error>Reload the app</Error>;
  }

  return (
    <Background>
      <StatusBar backgroundColor="#380D0D" barStyle="light-content" />   

      <Head>
        <UserContainer>
          <SvgCircle/>
          <UserText>Olá, Usuário</UserText>
        </UserContainer>

        <OptionsContainer> 
          <SvgOptions onPress={() => navigation.openDrawer()} />
        </OptionsContainer>
      </Head>

      <ScrollView showsVerticalScrollIndicator={false}>

      <ReportContainer onPress={() => navigation.navigate('Potholes')}>
        <HeadReport>
          <Title>Reportar Buracos</Title>
        </HeadReport>
        <Text>Aperte aqui para reportar buracos ou desníveis em: Ruas, calçadas, paredes avenidas ou estradas.</Text>
      </ReportContainer>

      <ReportContainer onPress={() => navigation.navigate('Sinalizations')}>
        <HeadReport>
          <Title>Reportar Sinalizações</Title>
        </HeadReport>
        <Text>Aperte aqui para reportar falta de sinalizações como: Placas, faixas de pedestres, semaforos ou faixas nas ruas.</Text>
      </ReportContainer>

      <ReportContainer onPress={() => navigation.navigate('Accessibilities')}>
        <HeadReport>
          <Title>Reportar Acessibilidade</Title>
        </HeadReport>
        <Text>Aperte aqui para reportar falta de acessibilidade como: Rampas, piso tátil, elevadores.</Text>
      </ReportContainer>

      <ReportContainer onPress={() => navigation.navigate('Illumination')}>
        <HeadReport>
          <Title>Reportar Iluminação</Title>
        </HeadReport>
        <Text>Aperte aqui para reportar falta de Iluminação em: Ruas, ambientes publicos, estradas ou avenidas:</Text>
      </ReportContainer>

      <ReportContainer onPress={() => navigation.navigate('Others')}>
        <HeadReport>
          <Title>Outros</Title>
        </HeadReport>
        <Text>Aperte aqui para reportar outros problemas não listados acima.</Text>
      </ReportContainer>

      </ScrollView>
    </Background>
  )
}

function Reports() {
  return (
    <Background></Background>
  )
}

export default function Principal() {
  return (
      <Drawer.Navigator initialRouteName="Home" screenOptions={{headerShown: false}} drawerContent={props => <DrawerContent {...props}/>}>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Acompanhar meus reportes" component={Reports} />
      </Drawer.Navigator>
  )
}