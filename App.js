import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from './components/MainTabs/Profile'
import Feed from './components/MainTabs/Feed'
import Suggestions from './components/MainTabs/Suggestions'
import Groups from './components/MainTabs/Groups'
import Post from './components/MainTabs/Post'


const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName='Feed'>
        <Tab.Screen name='Profile' component={Profile} options={{headerShown: false}}/>
        <Tab.Screen name='Groups' component={Groups} options={{headerShown: false}}/>
        <Tab.Screen name='Suggestions' component={Suggestions} options={{headerShown: false}}/>
        <Tab.Screen name='Post' component={Post} options={{headerShown: false}}/>
        <Tab.Screen name='Feed' component={Feed} options={{headerShown: false}}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
