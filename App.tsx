/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import UpcomingMovies from './src/components/UpcomingMovies';
import {Provider} from 'react-redux';
import {store} from './src/store';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MovieDetails from './src/components/MovieDetails';

const Stack = createStackNavigator();

const App: React.FC = () => (
  <>
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            options={{header: () => null}}
            component={UpcomingMovies}
          />
          <Stack.Screen
            name="MovieDetails"
            options={{title: 'Back'}}
            component={MovieDetails}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  </>
);

export default App;
