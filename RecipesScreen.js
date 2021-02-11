import * as React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import 'react-native-gesture-handler';
import { ScrollView } from 'react-native-gesture-handler';

import * as recipeData from './recipes.json';


export const RecipesScreen = ({ navigation, route }) => {

  return (
     <View >
        <ScrollView contentContainerStyle={recipeStyles.contentContainer}>
            {Object.keys(recipeData).map(function(key) {
                return (
                    (recipeData[key].recipeName !== undefined) && (
                        <View style={recipeStyles.smallerContainer} key={`Recipe-screen_${recipeData[key].recipeName}`}>
                            <Button
                                style={recipeStyles.smallerContainer}
                                title={`Go to ${recipeData[key].recipeName}`}
                                onPress={() =>
                                    navigation.navigate(`Recipe: ${recipeData[key].recipeName}`, { recipe: 'Hello' })}
                            >
                                <Image
                                    source={require('./fridge.png')} 
                                    style={recipeStyles.recipeImage}
                                />
                                <Text key={`RecipeScreen-${recipeData[key].recipeName}`}>
                                    {recipeData[key].recipeName}
                                </Text>
                            </Button>
                            
                        </View>
                    )
                )
            })} 
        </ScrollView>
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