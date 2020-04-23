/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView} from 'react-native';
import UpcomingMovies from './src/components/UpcomingMovies';
import {Provider} from 'react-redux';
import {store} from './src/store';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const App: React.FC = () => (
  <>
    <SafeAreaView>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Screen name="Home" component={UpcomingMovies} />
        </NavigationContainer>
      </Provider>
    </SafeAreaView>
  </>
);

export default App;
