import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Button, Footer, FooterTab, Icon } from 'native-base';

function GuFooter(props) {
  return (
    <Footer>
      <FooterTab style={styles.footer}>
        <Button vertical onPress={() => props.navigation.navigate('Home')}>
          <Icon style={styles.colorMain} name="home" />
          <Text style={styles.colorMain}>Home</Text>
        </Button>
        <Button vertical onPress={() => props.navigation.navigate('Polls')}>
          <Icon style={styles.colorMain} name="pie" />
          <Text style={styles.colorMain}>Encuestas</Text>
        </Button>
        <Button vertical onPress={() => props.navigation.navigate('Debates')}>
          <Icon style={styles.colorMain} name="eye" />
          <Text style={styles.colorMain}>Debates</Text>
        </Button>
        <Button vertical onPress={() => props.navigation.navigate('Aims')}>
          <Icon style={styles.colorMain} name="bulb" />
          <Text style={styles.colorMain}>Ideas</Text>
        </Button>
        <Button vertical onPress={() => props.navigation.navigate('Communities')}>
          <Icon style={styles.colorMain} name="person" />
          <Text style={styles.colorMain}>Comunidad</Text>
        </Button>
      </FooterTab>
    </Footer>
  )
}

const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#fff'
  },
  colorMain: {
    color: '#645394'
  },
});

export default GuFooter;