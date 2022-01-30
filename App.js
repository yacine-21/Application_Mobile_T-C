import React from 'react';
import Accueil from './view/Accueil';
import Laugh from './view/Laugh';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Accueil">
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Accueil"
          component={Accueil}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Laugh"
          component={Laugh}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
