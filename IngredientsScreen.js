import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Image, ImageBackground } from 'react-native';
import 'react-native-gesture-handler';
import { ScrollView } from 'react-native-gesture-handler';

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
          let alphabeticalList = completeIngredientsList.sort((a, b) => a.localeCompare(b))
          setAllIngredients(alphabeticalList);
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

        <View style={fridgeStyles.contentContainer}>
            {isLoading ? 
                (<Image
                    source={require('./fridge.png')} 
                    style={{ width: 300}}
                />)
                : 
                (allIngredients.map(function(ingredients) {
                    return (
                        <View style={fridgeStyles.smallerContainer}>
                            <Text>{ingredients}</Text>
                        </View>
                    )
                }))
            } 
        </View>

    </View>
)};

const fridgeStyles = StyleSheet.create({
  contentContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    alignSelf: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    maxWidth: '90%',
    borderRadius: 20,
    borderColor: 'lightgrey',
    borderWidth: 10,
  },
  smallerContainer: {
    width: 90,
    height: 90,
    borderRadius: 20,
    borderColor: 'lightgrey',
    borderWidth: 5,
    padding: 2,
    margin: 3,
  }
});

