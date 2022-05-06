import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import styled from 'styled-components'

// Importar MontSerrat para usar de font

const Background = styled.View`
  flex: 1;
  background-color: #5E1515;
`;

const CentralText = styled.Text`
  color: #FEFEFE; 
`;

export default function Welcome() {
  return (
    <Background>
      <View style={styles.contentLogo} >
        <Image 
          source={require('../../assets/LogoIcon/Logo.png')}
          style={styles.logo}
        />
      </View>

      <View style={styles.content}>
        <CentralText>{`Achou algo que te encomoda?\n`}</CentralText>
        <CentralText>{`Reporte para nós!`}</CentralText>
      </View>

    </Background>
  )
}

const styles = StyleSheet.create({
  contentLogo: {
    flexDirection:'row',
    justifyContent:'center'
  },
  logo: {
    width: 212,
    height: 60,
    marginTop: 150,
    marginBottom: 170
  },
  content: {
    width: '100%',
    height: 250,
    alignItems: 'center',
    backgroundColor: 'blue'
  },
})