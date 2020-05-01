import 'react-native-gesture-handler'; //make sure it's at the top and there's nothing else before it
import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainNavigation from './navigation/Main';
import Settings from './settings';
import Clock from './clock';
import { Provider } from 'react-redux'
import store from './redux/store'
import { kaciukasPink } from './styles/index';

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
