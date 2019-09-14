import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Content } from 'native-base'

import GuHeader from '../layout/header'

class Polls extends Component {
  render() {
    return (
      <Content>
        <View>
          <Text>Polls Screen</Text>
        </View>
      </Content>
    )
  }
}

const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#fff'
  },
  colorMain: {
    color: '#645394'
  }
})

export default Polls;