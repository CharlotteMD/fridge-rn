import * as React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { RecipesScreen } from './RecipesScreen';
import { IngredientsScreen } from './IngredientsScreen';
import { RecipeDetailsScreen } from './RecipeDetailsScreen';

import * as recipeData from './recipes.json';

const Stack = createStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={IngredientsScreen}
          options={{ title: "What's in your fridge?" }}
        />
        <Stack.Screen name="Recipes" component={RecipesScreen} />
        {Object.keys(recipeData).map(function(key) {
          return (
            <Stack.Screen 
              name={`Recipe: ${recipeData[key].recipeName}`}
              recipe={recipeData[key].recipeName}
              component={RecipeDetailsScreen}
              option={{title: `${recipeData[key].recipeName}`}}
          />)
        })}

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;