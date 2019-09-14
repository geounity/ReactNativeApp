import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// Screens
import HomeScreen from './screens/Home'
import PollsScreen from './screens/Polls'
import DebatesScreen from './screens/Debates'
import AimsScreen from './screens/Aims'
import CommunitiesScreen from './screens/Communities'

const AppNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  Polls: { screen: PollsScreen },
  Debates: { screen: DebatesScreen },
  Aims: { screen: AimsScreen },
  Communities: { screen: CommunitiesScreen }
},
{
  initialRouteName: 'Home',
  headerMode: 'none'
});

export default createAppContainer(AppNavigator);