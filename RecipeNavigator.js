import * as React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { RecipesScreen } from './RecipesScreen';
import { RecipeDetailsScreen } from './RecipeDetailsScreen';

import * as recipeData from './recipes.json';

const RecipeStack = createStackNavigator();

export const RecipeNavigator = () => {
  return (

    <RecipeStack.Navigator>
      <RecipeStack.Screen name="Recipes" component={RecipesScreen} />
        {Object.keys(recipeData).map(function(key) {
            return (
            <RecipeStack.Screen 
                name={`Recipe: ${recipeData[key].recipeName}`}
                recipe={recipeData[key].recipeName}
                component={RecipeDetailsScreen}
                option={{title: `${recipeData[key].recipeName}`}}
            />)
        })}

    </RecipeStack.Navigator>

  );
}