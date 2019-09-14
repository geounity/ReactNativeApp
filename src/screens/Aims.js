import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Container, Content, Footer, FooterTab, Button, Icon } from 'native-base'

import GuHeader from '../layout/header'
import GuFooter from '../layout/footer'

const Aims = props => {
  return (
    <Container>
      <GuHeader />
      <Content>
        <View>
          <Text>Aims Screen</Text>
        </View>
      </Content>

      <Footer>
        <FooterTab style={styles.footer}>
          <Button vertical onPress={() => this.props.navigation.navigate('Home')}>
            <Icon style={styles.colorMain} name="home" />
            <Text style={styles.colorMain}>Home!</Text>
          </Button>
          <Button vertical onPress={() => this.props.navigation.navigate('Polls')}>
            <Icon style={styles.colorMain} name="pie" />
            <Text style={styles.colorMain}>Encuestas!</Text>
          </Button>
          <Button vertical onPress={() => this.props.navigation.navigate('Debates')}>
            <Icon style={styles.colorMain} name="eye" />
            <Text style={styles.colorMain}>Debates!</Text>
          </Button>
          <Button vertical onPress={() => this.props.navigation.navigate('Aims')}>
            <Icon style={styles.colorMain} name="bulb" />
            <Text style={styles.colorMain}>Ideas!</Text>
          </Button>
          <Button vertical onPress={() => this.props.navigation.navigate('Communities')}>
            <Icon style={styles.colorMain} name="person" />
            <Text style={styles.colorMain}>Comunidades!</Text>
          </Button>
        </FooterTab>
      </Footer>

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