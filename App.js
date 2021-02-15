import * as React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { IngredientsNavigator } from './IngredientsNavigator';
import { RecipeNavigator } from './RecipeNavigator';

const Tab = createBottomTabNavigator();

const App = () => {

  return (

    <NavigationContainer>
    <Tab.Navigator>
        <Tab.Screen name="Fridge" component={IngredientsNavigator} />
        <Tab.Screen name="Recipes" component={RecipeNavigator} />
    </Tab.Navigator>
</NavigationContainer>


  );
};

export default App;