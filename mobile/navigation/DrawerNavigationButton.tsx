import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import { LotteriesDrawerNavigatorNavigationProp } from './types';

export const DrawerNavigationButton = () => {
    const navigation =
    useNavigation<LotteriesDrawerNavigatorNavigationProp<'LotteriesStack'>>();

  return (
    <TouchableOpacity
      accessibilityRole="button"
      onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
    >
      <MaterialIcons name="menu" size={24} color="black" />
    </TouchableOpacity>
  );
};