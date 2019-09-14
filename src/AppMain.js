import React from 'react'
import { Container, Content, Root } from 'native-base'

import AppNavigator from './AppNavigator'

import GuHeader from './layout/header'
// import GuFooter from './layout/footer'

const AppMain = () => {
  return (
    <Root>
      <Container>
        <GuHeader />
        <AppNavigator />
      </Container>
    </Root>
  )
}

export default AppMain;
