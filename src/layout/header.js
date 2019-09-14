import React from 'react'
import { Text, Image, StyleSheet, Platform, SafeAreaView, StatusBar } from 'react-native'
import { Header, Body, Title, Left, Right, Button } from 'native-base'

function GuHeader(props) {
  return (
    <SafeAreaView style={styles.AndroidSafeArea}>
      <Header style={styles.container}>
        <Left>
          <Image
            source={require('../../assets/simbolo.gif')}
            style={styles.logo}
          />
        </Left>
        <Body>
          <Title style={styles.title}>Geounity</Title>
        </Body>
        <Right>
          <Button success>
            <Text style={styles.text}>Iniciar sesión</Text>
          </Button>
        </Right>
      </Header>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  AndroidSafeArea: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  },
  container: {
    backgroundColor: '#fff'
  },
  logo: {
    height: 40,
    width: 40,
    marginHorizontal: 7,
    marginVertical: 3
  },
  title: {
    color: '#645394',
    fontSize: 22,
    fontWeight: 'bold'
  },
  text: {
    color: '#fff',
    textAlign: 'center'
  }
})

export default GuHeader