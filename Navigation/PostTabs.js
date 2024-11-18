import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import Post from '../Screens/MainTabs/Post'
import Post2 from '../Screens/MainTabs/Post2'


const Tab = createBottomTabNavigator()

export default function PostTabs() {
  return (
    <Tab.Navigator 
    initialRouteName='Post'
    screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, size }) => {
          let iconPath;

          if (route.name === 'Post') {
            iconPath = focused
              ? require('../assets/post1.png')
              : require('../assets/post1-no.png');
          } else if (route.name === 'Post2') {
            iconPath = focused
              ? require('../assets/post1.png')
              : require('../assets/post1-no.png');
          }

          return <Image source={iconPath} style={{ width: size, height: size}} />;
        },
        tabBarStyle: {
            paddingHorizontal: 20,
            height: 60,
            backgroundColor: '#4A4947'
        }
      })}>
      <Tab.Screen name='Post' component={Post} options={{headerShown: false,tabBarLabel: ()=>null}}/>
      <Tab.Screen name='Post2' component={Post2} options={{headerShown: false,tabBarLabel: ()=>null}}/>
    </Tab.Navigator>
  );
}