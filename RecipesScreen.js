import * as React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import 'react-native-gesture-handler';

import * as recipeData from './recipes.json';


export const RecipesScreen = ({ navigation, route }) => {

    const recipe = Object.keys(recipeData).map(function(key) {
        return recipeData[key].recipeName
    });

    console.log('My Recipes', recipe);

  return (
     <View>
        {Object.keys(recipeData).map(function(key) {
        return <Text>{recipeData[key].recipeName}</Text>
        })} 
    </View>
    );
};