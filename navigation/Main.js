import React from 'react';
import { Ionicons } from '@expo/vector-icons';

export default ({Tab, children}) => {
  return (
    <Tab.Navigator
      initialRouteName={"Settings"}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Clock') {
            iconName = focused
              ? 'ios-clock'
              : 'ios-clock';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'ios-settings' : 'ios-settings';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'black',
        inactiveTintColor: 'gray'
      }}
    >
      {children}
    </Tab.Navigator>
  )
}