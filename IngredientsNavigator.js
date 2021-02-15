import * as React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { IngredientsScreen } from './IngredientsScreen';

const IngredientsStack = createStackNavigator();

export const IngredientsNavigator = () => {
  return (
    <IngredientsStack.Navigator>
        <IngredientsStack.Screen
            name="Fridge"
            component={IngredientsScreen}
            options={{ title: "What's in your fridge?" }}
        />
    </IngredientsStack.Navigator>
  );
}