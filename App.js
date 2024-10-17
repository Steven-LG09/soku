import React, { useContext } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthContext } from './Context/auth-context';
import AuthContextProvider from './Context/auth-context';
import WelcomeScreen from './Screens/WelcomeScreen';
import MainTabs from './Navigation/MainTabs';
import ProfileOptions from "./Screens/SecondaryScreens/ProfileOptions";
import Feed2 from "./Screens/SecondaryScreens/Feed2";
import Chats from "./Screens/SecondaryScreens/Chats";
import MainContextProvider from "./Context/context";
import Other from "./Screens/Other";

const Stack = createStackNavigator()

export default function App() {
  const authCtx = useContext(AuthContext);

  return (
    <MainContextProvider>
      <AuthContextProvider>
        <NavigationContainer >
          <Stack.Navigator initialRouteName={authCtx.isLoggedIn ? "MainTabs" : "Welcome"}>
            <Stack.Screen name='Welcome' component={WelcomeScreen} options={{headerShown: false}}/>
            <Stack.Screen name='MainTabs' component={MainTabs} options={{headerShown: false}}/>
            <Stack.Screen name='ProfileOptions' component={ProfileOptions} options={{headerShown: true,headerStyle:{backgroundColor: '#4A4947'}}}/>
            <Stack.Screen name='Feed2' component={Feed2} options={{headerShown: false}}/>
            <Stack.Screen name='Chats' component={Chats} options={{headerShown: true,headerStyle:{backgroundColor: '#4A4947'}}}/>
            <Stack.Screen name='Test' component={Other} options={{headerShown: true,headerStyle:{backgroundColor: '#4A4947'}}}/>
          </Stack.Navigator>
        </NavigationContainer>
      </AuthContextProvider>
    </MainContextProvider>
  );
}
