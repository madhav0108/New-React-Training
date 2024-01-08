import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { LotteriesNavigator } from './LotteriesNavigator';
import { LotteriesSettingsNavigator } from './LotteriesSettingsNavigator';

const Drawer = createDrawerNavigator();

export const LotteriesDrawerNavigator = () => (
  <Drawer.Navigator screenOptions={{ headerShown: false }}>
    <Drawer.Screen
      name="LotteriesStack"
      component={LotteriesNavigator}
      options={{ title: 'Lotteries' }}
    />
    <Drawer.Screen
      name="LotteriesSettingsStack"
      component={LotteriesSettingsNavigator}
      options={{ title: 'Settings' }}
    />
  </Drawer.Navigator>
);