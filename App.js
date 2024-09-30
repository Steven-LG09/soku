import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import Profile from './Screens/MainTabs/Profile'
import Feed from './Screens/MainTabs/Feed';
import Suggestions from './Screens/MainTabs/Suggestions'
import Groups from './Screens/MainTabs/Groups'
import Post from './Screens/MainTabs/Post'


const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
      initialRouteName='Feed'
      screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, size }) => {
            let iconPath;
  
            if (route.name === 'Profile') {
              iconPath = focused
                ? require('../soku/assets/profile.png')
                : require('../soku/assets/profile-no.png');
            } else if (route.name === 'Groups') {
              iconPath = focused
                ? require('../soku/assets/group.png')
                : require('../soku/assets/group-no.png');
            } else if (route.name === 'Suggestions') {
              iconPath = focused
                ? require('../soku/assets/loupe.png')
                : require('../soku/assets/loupe-no.png');
            } else if (route.name === 'Post') {
              iconPath = focused
                ? require('../soku/assets/post.png')
                : require('../soku/assets/post-no.png');
            } else if (route.name === 'Feed') {
              iconPath = focused
                ? require('../soku/assets/home.png')
                : require('../soku/assets/home-no.png');
            } 
  
            return <Image source={iconPath} style={{ width: size, height: size}} />;
          },
          tabBarStyle: {
              paddingHorizontal: 20,
              height: 60,
              backgroundColor: '#192f6a'
          }
        })}>
        <Tab.Screen name='Profile' component={Profile} options={{headerShown: false,tabBarLabel: ()=>null}}/>
        <Tab.Screen name='Groups' component={Groups} options={{headerShown: false,tabBarLabel: ()=>null}}/>
        <Tab.Screen name='Suggestions' component={Suggestions} options={{headerShown: false,tabBarLabel: ()=>null}}/>
        <Tab.Screen name='Post' component={Post} options={{headerShown: false,tabBarLabel: ()=>null}}/>
        <Tab.Screen name='Feed' component={Feed} options={{headerShown: false,tabBarLabel: ()=>null}}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
