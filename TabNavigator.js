import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  return (
    <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name="Fridge" component={IngredientsScreen} />
            <Tab.Screen name="Recipes" component={RecipesScreen} />
        </Tab.Navigator>
    </NavigationContainer>
  );
}