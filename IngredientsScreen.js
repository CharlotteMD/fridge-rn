import * as React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import 'react-native-gesture-handler';

import * as recipeData from './recipes.json';


export const IngredientsScreen = ({ navigation, route }) => {

    let allRecipeIngredients = [];
    let completeIngredientsList = [];

    function getIngredients() {
        Object.keys(recipeData).map(function(key) {
            // console.log('1', recipeData)
            const recipeIngredients = recipeData[key].ingredients;
            // console.log('2', recipeIngredients)
            if ( recipeIngredients !== undefined ) {
                let allRecipeIngredients = addToIngredientsList(recipeIngredients);
            }
            // console.log('4', allRecipeIngredients)
          })
          const completeIngredientsList = allRecipeIngredients.reduce(function(a,b){if(a.indexOf(b)<0)a.push(b);return a;},[]);
          console.log('5', completeIngredientsList);
          return completeIngredientsList;
    }

    function addToIngredientsList(recipeIngredients) {
        recipeIngredients.map(ingredients => {
            allRecipeIngredients.push(ingredients)
        })
        // console.log('3', allRecipeIngredients)
        return allRecipeIngredients;
    }

getIngredients()


  return (
     <View>
        <Button
            title="Go to Recipes"
            onPress={() =>
              navigation.navigate('Recipes', { name: 'Jane' })
            }
        />
        {completeIngredientsList !== undefined && (
            completeIngredientsList.map(ingredients => {
                <Text key={ingredients}>This {ingredients}</Text>
            }
        ))} 
        {completeIngredientsList === undefined && (
                <Text>undefined</Text>
        )} 
    </View>
    );
};