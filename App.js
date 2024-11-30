import React, { useContext,useState,useEffect } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator,TransitionPresets } from '@react-navigation/stack';
import { AuthContext } from './Context/auth-context';
import AuthContextProvider from './Context/auth-context';
import WelcomeScreen from './Screens/WelcomeScreen';
import MainTabs from './Navigation/MainTabs';
import ProfileOptions from "./Screens/SecondaryScreens/ProfileOptions";
import MainContextProvider from "./Context/context";
import SignUp from './Screens/SignUp';
import Profile2 from './Screens/SecondaryScreens/Profile2'
import SplashScreen from './Screens/SplashScreen'

const Stack = createStackNavigator()

export default function App() {
  const authCtx = useContext(AuthContext);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) return <SplashScreen />; 

  return (
    <MainContextProvider>
      <AuthContextProvider>
        <NavigationContainer >
          <Stack.Navigator 
            screenOptions={{
              ...TransitionPresets.SlideFromRightIOS,
            }}
          initialRouteName={authCtx.isLoggedIn ? "MainTabs" : "Welcome"}>
            <Stack.Screen name='Welcome' component={WelcomeScreen} options={{headerShown: false}}/>
            <Stack.Screen name='MainTabs' component={MainTabs} options={{headerShown: false}}/>
            <Stack.Screen name='ProfileOptions' component={ProfileOptions} options={{headerShown: true,headerStyle:{backgroundColor: '#4A4947'}}}/>
            <Stack.Screen name='SignUp' component={SignUp} options={{headerShown: true,headerStyle:{backgroundColor: '#4A4947'}}}/>
            <Stack.Screen name='Profile2' component={Profile2} options={{headerShown: true,headerStyle:{backgroundColor: '#4A4947'}}}/>
          </Stack.Navigator>
        </NavigationContainer>
      </AuthContextProvider>
    </MainContextProvider>
  );
}
