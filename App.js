import 'react-native-gesture-handler'; //make sure it's at the top and there's nothing else before it
import React from 'react';
import { Provider } from 'react-redux'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainNavigation from './src/navigation/Main';
import Settings from './src/settings';
import Clock from './src/clock';
import store from './src/redux/store'
import { kaciukasPink } from './src/styles/index';

const Tab = createBottomTabNavigator();
const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    card: kaciukasPink,
  },
};


export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer theme={MyTheme}>
        <MainNavigation Tab={Tab}>
          <Tab.Screen name="Clock" component={Clock} />
          <Tab.Screen name="Settings" component={Settings} />
        </MainNavigation>
      </NavigationContainer>
    </Provider>
  );
}
