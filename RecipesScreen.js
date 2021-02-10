import * as React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import 'react-native-gesture-handler';

import * as recipeData from './recipes.json';


export const RecipesScreen = ({ navigation, route }) => {


  return (
     <View style={recipeStyles.contentContainer}>
        {Object.keys(recipeData).map(function(key) {
            return (
                (recipeData[key].recipeName !== undefined) && (
                    <View style={recipeStyles.smallerContainer}>
                        <Text key={`RecipeScreen-${recipeData[key].recipeName}`}>
                            {recipeData[key].recipeName}
                        </Text>
                    </View>
                )
            )
        })} 

    </View>
    );
};

const recipeStyles = StyleSheet.create({
    contentContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      alignSelf: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      maxWidth: '90%',
      borderRadius: 20,
      borderColor: 'lightgrey',
      borderWidth: 10,
    },
    smallerContainer: {
      width: '95%',
      height: 90,
      borderRadius: 20,
      borderColor: 'lightgrey',
      borderWidth: 5,
      padding: 2,
      margin: 3,
    }
  });