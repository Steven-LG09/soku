import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator,TransitionPresets } from '@react-navigation/stack';
import { Image } from 'react-native';
import Profile from '../Screens/MainTabs/Profile'
import Feed from '../Screens/MainTabs/Feed';
import Suggestions from '../Screens/MainTabs/Suggestions'
import Groups from '../Screens/MainTabs/Groups'
import PostTabs from './PostTabs';
import Feed2 from "../Screens/SecondaryScreens/Feed2";
import Chats from "../Screens/SecondaryScreens/Chats";
import Profile2 from '../Screens/SecondaryScreens/Profile2'
import ProfileOptions from "../Screens/SecondaryScreens/ProfileOptions";


const Tab = createBottomTabNavigator()
const Stack = createStackNavigator();

function FeedStack(){
  return(
   <Stack.Navigator
               screenOptions={{
              ...TransitionPresets.SlideFromRightIOS,
            }}>
    <Stack.Screen name='Feed' component={Feed} options={{headerShown: false}}/>
    <Stack.Screen name='Feed2' component={Feed2} options={{headerShown: false}}/>
    <Stack.Screen name='Chats' component={Chats} options={{headerShown: true,headerStyle:{backgroundColor: '#4A4947'}}}/>
   </Stack.Navigator> 
  )
}
function SugStack(){
  return(
   <Stack.Navigator
               screenOptions={{
              ...TransitionPresets.SlideFromRightIOS,
            }}>
    <Stack.Screen name='Suggestions' component={Suggestions} options={{headerShown: false}}/>
    <Stack.Screen name='Profile2' component={Profile2} options={{headerShown: true,headerStyle:{backgroundColor: '#4A4947'}}}/>
   </Stack.Navigator> 
  )
}

function ProStack(){
  return(
   <Stack.Navigator
               screenOptions={{
              ...TransitionPresets.SlideFromRightIOS,
            }}>
    <Stack.Screen name='Profile' component={Profile} options={{headerShown: false}}/>
    <Stack.Screen name='ProfileOptions' component={ProfileOptions} options={{headerShown: true,headerStyle:{backgroundColor: '#4A4947'}}}/>
   </Stack.Navigator> 
  )
}

export default function MainTabs() {
  return (
    <Tab.Navigator 
    initialRouteName='FeedStack'
    screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, size }) => {
          let iconPath;

          if (route.name === 'ProStack') {
            iconPath = focused
              ? require('../assets/profile.png')
              : require('../assets/profile-no.png');
          } else if (route.name === 'Groups') {
            iconPath = focused
              ? require('../assets/group.png')
              : require('../assets/group-no.png');
          } else if (route.name === 'SugStack') {
            iconPath = focused
              ? require('../assets/loupe.png')
              : require('../assets/loupe-no.png');
          } else if (route.name === 'PostTabs') {
            iconPath = focused
              ? require('../assets/post.png')
              : require('../assets/post-no.png');
          } else if (route.name === 'FeedStack') {
            iconPath = focused
              ? require('../assets/home.png')
              : require('../assets/home-no.png');
          } 

          return <Image source={iconPath} style={{ width: size, height: size}} />;
        },
        tabBarStyle: {
            paddingHorizontal: 20,
            height: 60,
            backgroundColor: '#4A4947'
        }
      })}>
      <Tab.Screen name='ProStack' component={ProStack} options={{headerShown: false,tabBarLabel: ()=>null}}/>
      <Tab.Screen name='Groups' component={Groups} options={{headerShown: false,tabBarLabel: ()=>null}}/>
      <Tab.Screen name='SugStack' component={SugStack} options={{headerShown: false,tabBarLabel: ()=>null}}/>
      <Tab.Screen name='PostTabs' component={PostTabs} options={{headerShown: false,tabBarLabel: ()=>null}}/>
      <Tab.Screen name='FeedStack' component={FeedStack} options={{headerShown: false,tabBarLabel: ()=>null}}/>
    </Tab.Navigator>
  );
}