import React, { Component } from "react";
import { StyleProvider } from 'native-base'

import * as Expo from "expo";
import * as Font from 'expo-font';
// import { Ionicons } from '@expo/vector-icons';

import AppMain from './src/AppMain'
// import getThemes from './src/themes/components'
// import variables from './src/themes/variables/commonColors'
import getTheme from './native-base-theme/components';
import material from './native-base-theme/variables/material';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isReady: false
    }
  }
  componentWillMount() {
    this.loadFonts();
  }
  async loadFonts() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      // Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
      Entypo: require("native-base/Fonts/Entypo.ttf"),
      Feather: require("native-base/Fonts/Feather.ttf"),
      FontAwesome: require("native-base/Fonts/FontAwesome.ttf"),
      Octicons: require("native-base/Fonts/Octicons.ttf"),
    });
    this.setState({ isReady: true });
  }
  render() {
    if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }
    return (
      <StyleProvider style={getTheme(material)}>
        <AppMain />
      </StyleProvider>
    );
  }
}

export default App;