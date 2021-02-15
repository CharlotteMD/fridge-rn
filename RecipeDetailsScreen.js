import * as React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import 'react-native-gesture-handler';


export const RecipeDetailsScreen = ({ navigation, route }) => {
const { recipeName, ingredients, recipe } = route.params;

  return (
     <View style={recipeStyles.contentContainer}>
        <Text>Learn how to make {recipeName}</Text>
        <Text>Ingredients: {ingredients}</Text>
        <Text>Recipe: {recipe}</Text>
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
        flexDirection: 'row',
        display: 'flex',
        flexWrap: 'wrap',
        width: '95%',
        height: 90,
        borderRadius: 20,
        borderColor: 'lightgrey',
        borderWidth: 5,
        padding: 2,
        margin: 3,
    },
    recipeImage: {
        width: 70,
        height: 70,
        resizeMode: 'contain',
        margin: 2,
    }
  });