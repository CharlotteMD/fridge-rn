import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Tab = createBottomTabNavigator();

import { RecipesScreen } from './RecipesScreen';
import { IngredientsScreen } from './IngredientsScreen';
import { RecipeDetailsScreen } from './RecipeDetailsScreen';
import { IngredientsNavigator } from './IngredientsNavigator';
import { RecipeNavigator } from './RecipeNavigator';

export const TabNavigator = () => {
  return (
    <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name="Fridge" component={IngredientsNavigator} />
            <Tab.Screen name="Recipes" component={RecipeNavigator} />
        </Tab.Navigator>
    </NavigationContainer>
  );
}