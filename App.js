import React, { useContext } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthContext } from './Context/auth-context';
import AuthContextProvider from './Context/auth-context';
import WelcomeScreen from './Screens/WelcomeScreen';
import MainTabs from './Navigation/MainTabs';


const Stack = createStackNavigator()

export default function App() {
  const authCtx = useContext(AuthContext);

  return (
    <AuthContextProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={authCtx.isLoggedIn ? "MainTabs" : "Welcome"}>
          <Stack.Screen name='Welcome' component={WelcomeScreen} options={{headerShown: false}}/>
          <Stack.Screen name='MainTabs' component={MainTabs} options={{headerShown: false}}/>
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContextProvider>
  );
}
