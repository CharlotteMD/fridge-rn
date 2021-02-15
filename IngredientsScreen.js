import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Image, ImageBackground } from 'react-native';
import 'react-native-gesture-handler';
import { ScrollView } from 'react-native-gesture-handler';

import * as recipeData from './recipes.json';


export const IngredientsScreen = ({ navigation, route }) => {

    const [ isLoading, setIsLoading ] = useState(true);
    const [ allIngredients, setAllIngredients ] = useState();
    const [ allRecipeData, setAllRecipeData ] = useState(recipeData);
    const [ checkedIngredientsArray, setCheckedIngredientsArray ] = useState([])
    const [ recipeSuggestions, setRecipeSuggestions ] = useState();

    let allRecipeIngredients = [];
    let completeIngredientsList = [];

    // console.log(allRecipeData)

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


    function checkIngredient(ingredients) {
        if (!checkedIngredientsArray.includes(ingredients)) {
            setCheckedIngredientsArray([...checkedIngredientsArray, ingredients] )
        } else {
            let toRemove = checkedIngredientsArray.filter(item => item !== ingredients)
            setCheckedIngredientsArray(toRemove);
        }
    }

    // function getRecipes(ingredient) {
    //     allRecipeData[key].ingredients.map(ingredients => {
    //         if (ingredients === ingredient) {
    //             let recipeList = myRecipeArray.push(allRecipeData[key])
    //             setRecipeSuggestions(recipeList);
    //         }
    //     })
    // }

    // function getRecipes(ingredient) {
    //     let myRecipeArray = [];
    //     Object.keys(allRecipeData).map(function(key) {
    //         const recipeIngredients = allRecipeData[key].ingredients;
            
    //         let howMany = Array.isArray(recipeIngredients);
    //         if (howMany) {
    //             allRecipeData[key].ingredients.map(ingredients => {
    //                 if (ingredients === ingredient) {
    //                     myRecipeArray.push(allRecipeData[key])
    //                 }
    //             })
    //         } else {
    //             const filteredRecipes = Object.keys(allRecipeData).filter(e => allRecipeData[e].ingredients === ingredient)
    //             if (filteredRecipes.length > 0) {
    //                 myRecipeArray.push(filteredRecipes)
    //             }
    //         }
    //       })
    //       setRecipeSuggestions(myRecipeArray)
    // }


useEffect(() => {
    getIngredients();
}, [allRecipeData]);

useEffect(() => {
    if (allIngredients !== undefined) {
        setIsLoading(false);
    }
}, [allIngredients]);

// useEffect(() => {
//     checkedIngredientsArray.map(ingredient => (getRecipes(ingredient)))
// }, [checkedIngredientsArray]);

useEffect(() => {
    console.log('recipes', recipeSuggestions)
}, [recipeSuggestions])


  return (
    <View>
        <Button
            title="Go to Recipes"
            onPress={() =>
            navigation.navigate('Recipes')
            }
        />

        <Text>{checkedIngredientsArray}</Text>

        <ScrollView contentContainerStyle={fridgeStyles.contentContainer}>
            {isLoading ? 
                (<Image
                    source={require('./fridge.png')} 
                    style={{ width: 300}}
                />)
                : 
                (allIngredients.map(function(ingredients) {
                    return (
                        <View style={fridgeStyles.smallerContainer}>
                            <Image
                                source={require('./fridge.png')} 
                                style={{ width: 30, height: 30}}
                            />
                            <Button
                                title={ingredients}
                                onPress={()=> checkIngredient(ingredients)}
                            />
                        </View>
                    )
                }))
            } 
        </ScrollView>

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

