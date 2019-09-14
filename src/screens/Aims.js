import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Container, Content, Footer, FooterTab, Button, Icon } from 'native-base'

import GuHeader from '../layout/header'
import GuFooter from '../layout/footer'

const Aims = props => {
  return (
    <Container>
      <Content>
        <View>
          <Text>Aims Screen</Text>
        </View>
      </Content>
    </Container>
  )
}

const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#fff'
  },
  colorMain: {
    color: '#645394'
  }
})

export default Aims;