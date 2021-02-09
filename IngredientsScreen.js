import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import 'react-native-gesture-handler';

import * as recipeData from './recipes.json';


export const IngredientsScreen = ({ navigation, route }) => {

    const [ isLoading, setIsLoading ] = useState(true);
    const [ allIngredients, setAllIngredients ] = useState();
    const [ allRecipeData, setAllRecipeData ] = useState(recipeData);

    let allRecipeIngredients = [];
    let completeIngredientsList = [];

    function getIngredients() {
        Object.keys(recipeData).map(function(key) {
            const recipeIngredients = recipeData[key].ingredients;
            if ( recipeIngredients !== undefined ) {
                let allRecipeIngredients = addToIngredientsList(recipeIngredients);
            }
          })
          let completeIngredientsList = allRecipeIngredients.reduce(function(a,b){if(a.indexOf(b)<0)a.push(b);return a;},[]);
          setAllIngredients(completeIngredientsList);
          return completeIngredientsList;
    };

    function addToIngredientsList(recipeIngredients) {
        recipeIngredients.map(ingredients => {
            allRecipeIngredients.push(ingredients)
        })
        return allRecipeIngredients;
    };



useEffect(() => {
    getIngredients();
}, [allRecipeData]);

useEffect(() => {
    if (allIngredients !== undefined) {
        setIsLoading(false);
    }
}, [allIngredients]);


  return (
     <View>
        <Button
            title="Go to Recipes"
            onPress={() =>
              navigation.navigate('Recipes', { name: 'Jane' })
            }
        />

        {isLoading ? 
            (<Text>undefined</Text>)
            : 
            (allIngredients.map(function(ingredients) {
                return <Text >{ingredients}</Text>
            }))
        } 
    </View>
    );
};