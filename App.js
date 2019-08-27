import React, { Component } from 'react';
import { StyleSheet, Text, ActivityIndicator } from 'react-native';
import { Container, Content, Footer, FooterTab, Button, Accordion, Icon, H1, H2 } from 'native-base'
import * as Font from 'expo-font'

// import Home from './src/screens/home'
import GuHeader from './src/layout/header'
// import api from './utils/api';

const dataArray = [
  { title: 'Crea encuestas', content: 'Las encuestas se componenen de preguntas. Hay varios tipos de preguntas. Defina las opciones de respuestas y decida la próxima pregunta en base a la respuesta anterior. Las encuestas son para una comunidad en específico.' },
  { title: 'Abre un debate', content: 'Los debates se dividen en puntos de vista. Cada punto de vista puede compartir su opinión o su visión sobre el problema. Las opiniones pueden ser argumentadas con datos de las encuestas o datos externos.' },
  { title: 'Propone una idea', content: 'Describe como solucionarías un problema que se discute en un debate. Los usuarios te harán preguntas que tu u otros podran responder. Define los recursos que necesitarás.' },
  { title: 'Investiga comunidades', content: 'Descubre datos sobre una comunidad. Nosotros investigamos una comunidad y presentamos los datos aquí' }
]

export default class App extends Component {
  state = {
    loading: true,
    pollList: [],
    staticList: [],
    debateList: [],
    aimList: []
  }
  componentWillMount = async() => {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf')
    })
    this.setState({ loading: false })
  }
  async componentDidMount() {
    this.setState({
      pollList: [
        {
          title: 'Encuesta uno'
        },
        {
          title: 'Encuesta dos'
        }
      ]
    })
  }
  render() {
    if (this.state.loading) {
      return <ActivityIndicator />
    }
    return (
      <Container>
        <GuHeader />
        <Content padder>
          <H1 style={[styles.titleMain, styles.textCenter]}>Mediación digital</H1>
          <H2 style={styles.textCenter}>¿Qué puedo hacer con esta app?</H2>
          <Accordion
            dataArray={dataArray}
            headerStyle={styles.accordionHeader}
            contentStyle={styles.accordionContent}
            expanded={0}
          />
        </Content>
        <Footer>
          <FooterTab style={styles.footer}>
            <Button vertical>
              <Icon style={styles.colorMain} name="home" />
              <Text style={styles.colorMain}>Home!</Text>
            </Button>
            <Button vertical>
              <Icon style={styles.colorMain} name="pie" />
              <Text style={styles.colorMain}>Encuestas!</Text>
            </Button>
            <Button vertical>
              <Icon style={styles.colorMain} name="eye" />
              <Text style={styles.colorMain}>Debates!</Text>
            </Button>
            <Button vertical>
              <Icon style={styles.colorMain} name="bulb" />
              <Text style={styles.colorMain}>Ideas!</Text>
            </Button>
            <Button vertical>
              <Icon style={styles.colorMain} name="person" />
              <Text style={styles.colorMain}>Comunidades!</Text>
            </Button>
          </FooterTab>      
        </Footer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  accordionHeader: {
    marginTop: 10,
    color: '#645394' // No funciona
  },
  footer: {
    backgroundColor: '#fff'
  },
  colorMain: {
    color: '#645394'
  },
  titleMain: {
    backgroundColor: '#222',
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    paddingVertical: 20
  },
  textCenter: {
    textAlign: 'center'
  }
});
